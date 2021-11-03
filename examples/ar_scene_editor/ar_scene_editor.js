// dependencies and utilities
import * as mat4 from '../libs/gl-matrix/mat4.js';
import * as vec3 from '../libs/gl-matrix/vec3.js';
import XREngine from '../XREngine.js';

import initializeLight from './jsm/light.js';
import updateScene from './jsm/render.js';
import getGeometry from './jsm/get-geometry.js';
import showSliders from './jsm/show-sliders.js';
import updateState from './jsm/update-state.js';
import updateSliders from './jsm/update-sliders.js';
import changeMainTool from './jsm/change-tool.js';
import addPatternButtons from './jsm/pattern-textures.js';
import addMaterialButtons from './jsm/material-textures.js';
import { newDeleteButton, newObjectDiv } from './jsm/object-list.js';

// temporary working variables
const workingMatrix = mat4.create();
const workingVec3 = vec3.create();

////////////////////// Start of AR Scene ///////////////////////////
// Add light and toolbar functionality
const addScene = () => {

    initializeLight(engine);
    addMainToolbar();

    removeTextureButton.addEventListener("click", () => {
        let material = new THREE.MeshStandardMaterial({
            color: color,
            side: THREE.DoubleSide
        })
        currentObject.material = material;
    })

    addMaterialButtons();
    addPatternButtons();    
}

////////////////////// Initialize Immersive AR Session ///////////////////////////

// If AR is supported, enable Go button and attach onButtonClick. If not, show 'No WebXR support'
const initXR = () => {
    if (navigator.xr) {
        navigator.xr.isSessionSupported('immersive-ar').then(supported => {
            if (supported) {
                goButton.disabled = false;
                goButton.addEventListener('click', onButtonClick);
            } else {
                goButton.initText = 'No WebXR AR support';
            }
        });
    } else {
        goButton.initText = 'No WebXR support';
    }
};

// When Go button is pressed, start Immersive AR session if there isn't already a session. If there is a session, end it.
const onButtonClick = event => {
    if (!session) {
        navigator.xr.requestSession('immersive-ar',{ optionalFeatures: ["dom-overlay"], domOverlay: { root: document.getElementById("xr-overlay")}})
        .then(xrSession => {
            initSession(xrSession);
            goButton.innerText = 'End';
        }).catch(err => {
            console.error('Session setup error', err);
        });
    } else {
        session.end();
    }
};

// Create engine - runs after Go button is pressed
const initSession = async xrSession => {
    session = xrSession;
    session.addEventListener('end', onSessionEnd);

    localReferenceSpace = await session.requestReferenceSpace('local');
    viewerReferenceSpace = await session.requestReferenceSpace('viewer');

    // Create the context where we will render our 3D scene
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl', {
        xrCompatible: true
    });

    if (!context) throw new Error('Could not create a webgl context');

    // Set up the base layer
    session.updateRenderState({baseLayer: new XRWebGLLayer(session, context)});

    // Create a simple test scene and renderer
    // The engine's scene is in the eye-level coordinate system 
    engine = new XREngine(canvas, context);

    // get the location of the device, and use it to create an
    // anchor with the identity orientation
    session.requestAnimationFrame(async (t, frame) => {
        mat4.copy(workingMatrix, frame.getPose(localReferenceSpace, viewerReferenceSpace).transform.matrix);
        mat4.getTranslation(workingVec3, workingMatrix);
        mat4.fromTranslation(workingMatrix, workingVec3);

        const anchor = await frame.addAnchor(workingMatrix, localReferenceSpace);
        engine.addAnchoredNode(anchor, engine.root);

        // Kick off rendering
        session.requestAnimationFrame(handleAnimationFrame);
    });

    // turn DOM from hidden to visible
    document.getElementById("xr-overlay").style.visibility = "visible";

    addScene();
    
};


const onSessionEnd = event => {
    session = null;
    viewerReferenceSpace = null;
    localReferenceSpace = null;
    goButton.innerText = 'Go';
    // hide DOM
    document.getElementById("xr-overlay").style.visibility = "hidden";
};

////////////////////// Render Loop ///////////////////////////	
const handleAnimationFrame = (t, frame) => {
    if(!session || session.ended) return;

    //update edit tool slider values
    updateState();

    if (objectsList.length > 0) {
        currentObject = engine._scene.children[currentObjectIndex];
        //render.js
        updateScene();
    }

    session.requestAnimationFrame(handleAnimationFrame);
    const pose = frame.getViewerPose(localReferenceSpace);
    if (!pose) {
        console.log('No pose');
        return;
    }

    engine.startFrame();
    for (const view of pose.views) {
        engine.preRender(
            session.renderState.baseLayer.getViewport(view),
            view.projectionMatrix,
            view.transform.matrix
        );
        engine.render();
    }
    engine.endFrame();
}
////////////////////// Back, Add, Edit, Select/Delete ///////////////////////////
function addMainToolbar() {

    // Menu Back Buttons
    const menuBack = () => {
        removeSliders(currentEditTool);
        changeMainTool("none", mainToolbar);
    }

    menuBackButtons.forEach((el) => {
        el.addEventListener('click', menuBack)
    });
    
    // Texture Menu Back Buttons
    const textureMenuBack = () => {
        changeMainTool("none", textureToolbar);
    }

    textureMenuBackButtons.forEach((el) => {
        el.addEventListener('click', textureMenuBack)
    });

    // End session
    const endSession = () => {
        window.history.back();
    }
    endButton.addEventListener("click", endSession)

    // Add button
    const addObject = () => {
        removeSliders(currentEditTool);
        changeMainTool(addButton, addShapeToolbar);
    }
    addButton.addEventListener("click", addObject)

    // Edit button
    const editObject = () => {
        if (objectsList.length > 0) {
            updateSliders();
        }
        changeMainTool(editButton, editToolbar);
        showSliders();
    }
    editButton.addEventListener("click", editObject)

    editMenuBackButtons.forEach((el) => {
        el.addEventListener('click', editObject)
    });

    const selectObject = (ev) => {
        let index = parseInt(ev.target.id) + 1
        currentObjectIndex = index;
        document.querySelector('.active-object').classList.remove('active-object');
        ev.target.classList.add('active-object')
    }

    const deleteObject = (ev) => {
        // get index of object
        let index = parseInt(ev.target.id) - 1
        // get the object with the uuid and active status
        let uuid = objectsList[index].uuid
        let object = engine._scene.getObjectByProperty('uuid', uuid);
        let isActiveObject = false;
        let activeObject = document.querySelector('.active-object')

          if (ev.target.id === activeObject.id) {
              isActiveObject = true;
          }
        // remove from objectList
        objectsList.splice(index, 1);
        // remove object from the scene
        engine._scene.remove(object);
        // dispose of object information in memory
        object.geometry.dispose();
        object.material.dispose();
        // if current object is deleted, set current object to last in list
        if (isActiveObject) {
            currentObjectIndex = engine._scene.children.length - 1;
            currentObject = engine._scene.children[currentObjectIndex];
        }
        // update to show the new list
        updateObjectsList();        
    }


    function updateObjectsList() {
        let objectsContainer = document.createElement('div');
        objectsContainer.classList.add('objects-container');

        if (objectsList.length > 0) {
    
            let count = 1;

            for (let i = 0; i < objectsList.length; i++){
                let objectContainer = document.createElement('div');
                objectContainer.classList.add('object-container');
                let geometry = getGeometry(objectsList[i]);
                let div = newObjectDiv(objectsList[i], geometry, count);
                count++;
                div.addEventListener('click', selectObject)

                
                if (currentObject.uuid === objectsList[i].uuid) {
                    div.classList.add('active-object')
                }


                let button = newDeleteButton(div.id);
                button.addEventListener('click', deleteObject);
                objectContainer.appendChild(div);
                objectContainer.appendChild(button);
                objectsContainer.appendChild(objectContainer)

            }
        }

        selectToolbar.replaceChild(objectsContainer, document.querySelector('.objects-container'));
    }

    // Select / Delete button
    const selectOrDeleteObject = () => {
        removeSliders(currentEditTool);
        changeMainTool(selectButton, selectToolbar);
        updateObjectsList();
    }
    selectButton.addEventListener("click", selectOrDeleteObject);

    }
initXR();


        