// dependencies and utilities
import * as mat4 from '../libs/gl-matrix/mat4.js';
import * as vec3 from '../libs/gl-matrix/vec3.js';
import XREngine from '../XREngine.js';

import { initializeLight } from './jsm/light.js';
import { editToolsOutput } from './jsm/edit-tools.js';
import { updateScene } from './jsm/render.js';
import getGeometry from './jsm/get-geometry.js';
import { changeMainTool, changeEditTool } from './jsm/change-tool.js';
import { newDeleteButton, newObjectDiv } from './jsm/object-list.js';
import { patternTextures } from './jsm/pattern-textures.js';
import { materialTextures } from './jsm/materials.js';

let session = null;
let localReferenceSpace = null;
let viewerReferenceSpace = null;
let engine = null;

// Start AR session button
const goButton = document.getElementById('go-button');

// Main Toolbar
const endButton = document.getElementById('end-session');
const addButton = document.getElementById('add-button');
const editButton = document.getElementById('edit-button');
const selectButton = document.getElementById('select-button');

// Bottom Toolbar
const menuBackButtons = document.querySelectorAll('.menu-back-button')
const editMenuBackButtons = document.querySelectorAll('.edit-menu-back-button')
const textureMenuBackButtons = document.querySelectorAll('.texture-menu-back-button')
const mainToolbar = document.getElementById('main-toolbar');
const addShapeToolbar = document.getElementById('add-shape-toolbar');
const editToolbar = document.getElementById('edit-toolbar');
const selectToolbar = document.getElementById('select-toolbar');
const textureToolbar = document.getElementById('texture-toolbar');
const materialsToolbar = document.getElementById('materials-toolbar');
const patternTexturesToolbar = document.getElementById('pattern-textures-toolbar');

// Scale Sliders
const scaleSliders = document.getElementById("scale-sliders");
const scaleXSlider = document.getElementById("scaleX-slider-input");
const scaleYSlider = document.getElementById("scaleY-slider-input");
const scaleZSlider = document.getElementById("scaleZ-slider-input");

// Rotation Sliders
const rotateSliders = document.getElementById("rotate-sliders");
const rotateXSlider = document.getElementById("rotateX-slider-input");
const rotateYSlider = document.getElementById("rotateY-slider-input");
const rotateZSlider = document.getElementById("rotateZ-slider-input");

// Color Sliders
const colorSliders = document.getElementById('color-sliders');
const redSlider = document.getElementById("red-slider-input");
const greenSlider = document.getElementById("green-slider-input");
const blueSlider = document.getElementById("blue-slider-input");

// Position Sliders
const posSliders = document.getElementById('position-sliders');
const posXSlider = document.getElementById("posX-slider-input");
const posYSlider = document.getElementById("posY-slider-input");
const posZSlider = document.getElementById("posZ-slider-input");

// Edit Tools
const scaleButton = document.getElementById('scale-button');
const rotateButton = document.getElementById('rotate-button');
const colorButton = document.getElementById('color-button');
const moveButton = document.getElementById('move-button');
const textureButton = document.getElementById('texture-button');

// Add Shape Tools
const cubeButton = document.getElementById('cube-button');
const sphereButton = document.getElementById('sphere-button');
const cylinderButton = document.getElementById('cylinder-button');
const planeButton = document.getElementById('plane-button');
const coneButton = document.getElementById('cone-button');
const torusButton = document.getElementById('torus-button');
const ringButton = document.getElementById('ring-button');
const tetrahedronButton = document.getElementById('tetrahedron-button');
const octahedronButton = document.getElementById('octahedron-button');
const icosahedronButton = document.getElementById('icosahedron-button');
const dodecahedronButton = document.getElementById('dodecahedron-button');

const scaleXOutput = document.getElementById("scaleX-slider-output");
const scaleYOutput = document.getElementById("scaleY-slider-output");
const scaleZOutput = document.getElementById("scaleZ-slider-output");

const rotateXOutput = document.getElementById("rotateX-slider-output");
const rotateYOutput = document.getElementById("rotateY-slider-output");
const rotateZOutput = document.getElementById("rotateZ-slider-output");

const redOutput = document.getElementById("red-slider-output");
const greenOutput = document.getElementById("green-slider-output");
const blueOutput = document.getElementById("blue-slider-output");

const posXOutput = document.getElementById("posX-slider-output");
const posYOutput = document.getElementById("posY-slider-output");
const posZOutput = document.getElementById("posZ-slider-output");

let redVal = redSlider.value;
let greenVal = greenSlider.value;
let blueVal = blueSlider.value;

let scaleX = scaleXSlider.value;
let scaleY = scaleYSlider.value;
let scaleZ = scaleZSlider.value;

let rotateX = rotateXSlider.value;
let rotateY = rotateYSlider.value;
let rotateZ = rotateZSlider.value;

let posX = posXSlider.value;
let posY = posYSlider.value;
let posZ = posZSlider.value;

let currentObjectIndex = 0;
let currentObject;
let currentEditTool = "scale";
    
let objectsList = [];

// texture buttons
const removeTextureButton = document.getElementById('remove-texture-button');
const materialsButton = document.getElementById('materials-button');
const patternTextureButton = document.getElementById('pattern-texture-button');

// material texture buttons
const whiteMarbleTextureButton = document.getElementById('white-marble-texture-button');
const barkTextureButton = document.getElementById('bark-texture-button');
const asphaltTextureButton = document.getElementById('asphalt-texture-button');
const woodTextureButton = document.getElementById('wood-texture-button');
const rocksTextureButton = document.getElementById('rocks-texture-button');
const pebblesTextureButton = document.getElementById('pebbles-texture-button');
const iceTextureButton = document.getElementById('ice-texture-button');

// pattern texture buttons
const texture1Button = document.getElementById('texture1-button');
const texture2Button = document.getElementById('texture2-button');
const texture3Button = document.getElementById('texture3-button');
const texture4Button = document.getElementById('texture4-button');
const texture5Button = document.getElementById('texture5-button');
const texture6Button = document.getElementById('texture6-button');

let color = new THREE.Color(redVal, greenVal, blueVal);
let position = [posX, posY, posZ];
let scale = [0.1, 0.1, 0.1];

// Debug Box
const debug = document.getElementById('debug');

// temporary working variables
const workingMatrix = mat4.create();
const workingVec3 = vec3.create();

// used to remove sliders in render.js updateScene function
const removeSliders = (editTool) => {
    switch(editTool){
        case "scale":
            scaleSliders.style.display = "none";
            break;
        case "rotate":
            rotateSliders.style.display = "none";
            break;
        case "color":
            colorSliders.style.display = "none";
            break;
        case "move":
            posSliders.style.display = "none";
            break;
        default:
    }
}

////////////////////// Start of AR Scene ///////////////////////////
// Add light and toolbar functionality
const addScene = () => {

    initializeLight(engine);
    addMainToolbar();
    editToolsOutput.scaleSlider(scaleXSlider,
        scaleYSlider,
        scaleZSlider,
        scaleXOutput,
        scaleYOutput,
        scaleZOutput);

    editToolsOutput.rotateSlider(rotateXSlider,
        rotateYSlider,
        rotateZSlider,
        rotateXOutput,
        rotateYOutput,
        rotateZOutput);
    
    editToolsOutput.colorSlider(redSlider,
        greenSlider,
        blueSlider,
        redOutput,
        greenOutput,
        blueOutput);
    
    editToolsOutput.posSlider(posXSlider,
        posYSlider,
        posZSlider,
        posXOutput,
        posYOutput,
        posZOutput);


    ////////////////////// Add Tools///////////////////////////
        
    const setLastObject = () => {
        currentObjectIndex = engine._scene.children.length - 1;
    }
        
    const addNewObject = (geometry) => {
        switch (geometry) {
            case "cube":
                objectsList.push(engine.addBox(position, scale, color));
                break;
            case "sphere":
                objectsList.push(engine.addSphere(position, scale, color));
                break;
            case "cylinder":
                objectsList.push(engine.addCylinder(position, scale, color));
                break;
            case "plane":
                objectsList.push(engine.addPlane(position, scale, color));
                break;
            case "cone":
                objectsList.push(engine.addCone(position, scale, color));
                break;
            case "torus":
                objectsList.push(engine.addTorus(position, scale, color));
                break;
            case "ring":
                objectsList.push(engine.addRing(position, scale, color));
                break;
            case "tetrahedron":
                objectsList.push(engine.addTetrahedron(position, scale, color));
                break;
            case "octahedron":
                objectsList.push(engine.addOctahedron(position, scale, color));
                break;
            case "icosahedron":
                objectsList.push(engine.addIcosahedron(position, scale, color));
                break;
            case "dodecahedron":
                objectsList.push(engine.addDodecahedron(position, scale, color));
                break;
            default:
        }
        setLastObject();
    }

    cubeButton.addEventListener("click", function () {
        addNewObject("cube");
    })
    sphereButton.addEventListener("click", function () {
        addNewObject("sphere");
    })
    cylinderButton.addEventListener("click", function () {
        addNewObject("cylinder");
    })
    planeButton.addEventListener("click", function () {
        addNewObject("plane");
    })
    coneButton.addEventListener("click", function () {
        addNewObject("cone");
    })
    torusButton.addEventListener("click", function () {
        addNewObject("torus");
    })
    ringButton.addEventListener("click", function () {
        addNewObject("ring");
    })
    tetrahedronButton.addEventListener("click", function () {
        addNewObject("tetrahedron");
    })
    octahedronButton.addEventListener("click", function () {
        addNewObject("octahedron");
    })
    icosahedronButton.addEventListener("click", function () {
        addNewObject("icosahedron");
    })
    dodecahedronButton.addEventListener("click", function () {
        addNewObject("dodecahedron");
    })

    ////////////////////// Edit Tools///////////////////////////

    const scaleObject = () => {
        removeSliders(currentEditTool);
        currentEditTool = "scale";
        changeEditTool(scaleButton, scaleSliders);
    }

    const rotateObject = () => {
        removeSliders(currentEditTool);
        currentEditTool = "rotate";
        changeEditTool(rotateButton, rotateSliders);
    }          

    const colorObject = () => {
        removeSliders(currentEditTool);
        currentEditTool = "color";
        changeEditTool(colorButton, colorSliders);
    }

    const moveObject = () => {
        removeSliders(currentEditTool);
        currentEditTool = "move";
        changeEditTool(moveButton, posSliders);
    }

    const textureObject = () => {
        removeSliders(currentEditTool);
        changeMainTool("none", textureToolbar);
    }

    const showMaterials = () => {
        removeSliders(currentEditTool);
        changeMainTool("none", materialsToolbar)
    }

    const showPatternTextures = () => {
        removeSliders(currentEditTool);
        changeMainTool("none", patternTexturesToolbar)
    }


    scaleButton.addEventListener("click", scaleObject)
    rotateButton.addEventListener("click", rotateObject)
    colorButton.addEventListener("click", colorObject)
    moveButton.addEventListener("click", moveObject)
    textureButton.addEventListener("click", textureObject)
    materialsButton.addEventListener("click", showMaterials)
    patternTextureButton.addEventListener("click", showPatternTextures)

    removeTextureButton.addEventListener("click", () => {
        let material = new THREE.MeshStandardMaterial({
            color: color,
            side: THREE.DoubleSide
        })
        currentObject.material = material;
    })

     ///// Material Texture Button Event Listeners
    
    whiteMarbleTextureButton.addEventListener("click", () => {
        currentObject.material = materialTextures.getWhiteMarbleTexture()
    })

    barkTextureButton.addEventListener("click", () => {
        currentObject.material = materialTextures.getBarkTexture()
    })

    iceTextureButton.addEventListener("click", () => {
        currentObject.material = materialTextures.getRoughGlassMaterial()
    })

    woodTextureButton.addEventListener("click", () => {
        currentObject.material = materialTextures.getWoodTexture()
    })

    rocksTextureButton.addEventListener("click", () => {
        currentObject.material = materialTextures.getRocksTexture()
    })

    pebblesTextureButton.addEventListener("click", () => {
        currentObject.material = materialTextures.getPebblesTexture()
    })

    asphaltTextureButton.addEventListener("click", () => {
        currentObject.material = materialTextures.getAsphaltTexture()
    })

    

    ///// Pattern Texture Button Event Listeners
    
    texture1Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_1()
    })

    texture2Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_2()
    })

    texture3Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_3()
    })

    texture4Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_4()
    })

    texture5Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_5()
    })

    texture6Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_6()
    })


    
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

    //update scale from slider values
    scaleX = scaleXSlider.value;
    scaleY = scaleYSlider.value;
    scaleZ = scaleZSlider.value;

    //update rotation from slider values
    rotateX = rotateXSlider.value;
    rotateY = rotateYSlider.value;
    rotateZ = rotateZSlider.value;

    //update colors from slider value
    redVal = redSlider.value;
    greenVal = greenSlider.value;
    blueVal = blueSlider.value;
    color = new THREE.Color("rgb(" + redVal + "," + greenVal + "," + blueVal + ")");

    //update position from slider values
    posX = posXSlider.value;
    posY = posYSlider.value;
    posZ = posZSlider.value;

    if (objectsList.length > 0) {
        currentObject = engine._scene.children[currentObjectIndex];
        //render.js
        updateScene(currentObject, 
        currentEditTool, 
        editToolbar,
        scaleX,
        scaleY,
        scaleZ,
        rotateX,
        rotateY,
        rotateZ,
        color,
        posX,
        posY,
        posZ,
        debug);
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
            let units = "cm";
            // update sliders to current object
            scaleXSlider.value = currentObject.scale.x
            scaleYSlider.value = currentObject.scale.y
            scaleZSlider.value = currentObject.scale.z
            let scaleXVal = scaleXSlider.value * 10
            let scaleYVal = scaleYSlider.value * 10
            let scaleZVal = scaleZSlider.value * 10
            if (Math.abs(scaleXVal) > 99) {
                scaleXVal = scaleXVal / 100;
                units = "m";
            }
            scaleXOutput.innerHTML = `X: ${scaleXVal}${units}`;

            if (Math.abs(scaleYVal) > 99) {
                scaleYVal = scaleYVal / 100;
                units = "m";
            } else {
                units = "cm";
            }
            scaleYOutput.innerHTML = `Y: ${scaleYVal}${units}`;

            if (Math.abs(scaleZVal) > 99) {
                scaleZVal = scaleZVal / 100;
                units = "m";
            } else {
                units = "cm";
            }
            scaleZOutput.innerHTML = `Z: ${scaleZVal}${units}`;

            rotateXSlider.value = currentObject.rotation.x * 180 / Math.PI;
            rotateYSlider.value = currentObject.rotation.y * 180 / Math.PI;
            rotateZSlider.value = currentObject.rotation.z * 180 / Math.PI;
            rotateXOutput.innerHTML = `X: ${rotateXSlider.value}°`;
            rotateYOutput.innerHTML = `Y: ${rotateYSlider.value}°`;
            rotateZOutput.innerHTML = `Z: ${rotateZSlider.value}°`;
    
            redSlider.value = currentObject.material.color.r * 255
            greenSlider.value = currentObject.material.color.g * 255
            blueSlider.value = currentObject.material.color.b * 255
            redOutput.innerHTML = "Red: " + redSlider.value;
            greenOutput.innerHTML = "Green: " + greenSlider.value;
            blueOutput.innerHTML = "Blue: " + blueSlider.value;
    
            posXSlider.value = currentObject.position.x
            posYSlider.value = currentObject.position.y
            posZSlider.value = currentObject.position.z
            let posXVal = parseInt(posXSlider.value * 100);
            let posYVal = parseInt(posYSlider.value * 100);
            let posZVal = parseInt(posZSlider.value * 100);

            if (Math.abs(posXVal) > 99) { 
                posXVal = posXVal / 100;
                units = "m"
            } else {
                units = "cm"
            }
            posXOutput.innerHTML = `X: ${posXVal}${units}`

            if (Math.abs(posYVal) > 99) {
                posYVal = posYVal / 100;
                units = "m"
            } else {
                units = "cm"
            }
            posYOutput.innerHTML = `Y: ${posYVal}${units}`

            if (Math.abs(posZVal) > 99) {
                posZVal = posZVal / 100;
                units = "m"
            } else {
                units = "cm"
            }
            posZOutput.innerHTML = `Z: ${posZVal}${units}`
        }

        changeMainTool(editButton, editToolbar);
        switch(currentEditTool){
            case "scale":
                scaleSliders.style.display = "grid";
                break;
            case "rotate":
                rotateSliders.style.display = "grid";
                break;
            case "color":
                colorSliders.style.display = "grid";
                break;
            case "move":
                posSliders.style.display = "grid";
                break;
            default:
        }


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


        