// dependencies and utilities
import * as mat4 from '../libs/gl-matrix/mat4.js';
import * as vec3 from '../libs/gl-matrix/vec3.js';
import XREngine from '../XREngine.js';

import { initializeLight } from './jsm/light.js';
import { editTools } from './jsm/edit-tools.js';
import { updateScene } from './jsm/render.js';
import getGeometry from './jsm/get-geometry.js';

let session = null;
let localReferenceSpace = null;
let viewerReferenceSpace = null;
let engine = null;

// Start AR session button
const goButton = document.getElementById('go-button');

// Left Toolbar
const endButton = document.getElementById('end-session');
const addButton = document.getElementById('add-button');
const editButton = document.getElementById('edit-button');
const deleteButton = document.getElementById('delete-button');

// Bottom Toolbar
const toolbarInstructions = document.getElementById('toolbar-instructions');
const addToolbar = document.getElementById('add-toolbar');
const editToolbar = document.getElementById('edit-toolbar');
const deleteToolbar = document.getElementById('delete-toolbar');

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

//Add Tools
const cubeButton = document.getElementById('cube-button');
const sphereButton = document.getElementById('sphere-button');
const cylinderButton = document.getElementById('cylinder-button');
const planeButton = document.getElementById('plane-button');

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

    addLeftToolbar();

    editTools(scaleXSlider,
    scaleYSlider,
    scaleZSlider,
    rotateXSlider,
    rotateYSlider,
    rotateZSlider,
    redSlider, 
    greenSlider, 
    blueSlider,  
    posXSlider,  
    posYSlider,  
    posZSlider);	

////////////////////// Add Tools///////////////////////////

// Add a cube
const addCube = () => {
    objectsList.push(engine.addBox(position, scale, color));
}

// Add a sphere
const addSphere = () => {
    objectsList.push(engine.addSphere(position, scale, color));
}

// Add a cylinder
const addCylinder = () => {
    objectsList.push(engine.addCylinder(position, scale, color));
}

// Add a plane
const addPlane = () => {
    objectsList.push(engine.addPlane(position, scale, color));
}

cubeButton.addEventListener("click", addCube)
sphereButton.addEventListener("click", addSphere)
cylinderButton.addEventListener("click", addCylinder)
planeButton.addEventListener("click", addPlane)

////////////////////// Edit Tools///////////////////////////

const scaleObject = () => {
    removeSliders(currentEditTool);
    scaleSliders.style.display = "grid";
    currentEditTool = "scale";
    let activeTool = document.querySelector(".active-edit")
    activeTool.classList.remove("active-edit");
    scaleButton.classList.add("active-edit");
}

const rotateObject = () => {
    removeSliders(currentEditTool);
    rotateSliders.style.display = "grid";
    currentEditTool = "rotate";
    let activeTool = document.querySelector(".active-edit")
    activeTool.classList.remove("active-edit");
    rotateButton.classList.add("active-edit");
}          


const colorObject = () => {
    removeSliders(currentEditTool);
    colorSliders.style.display = "grid";
    currentEditTool = "color";
    let activeTool = document.querySelector(".active-edit")
    activeTool.classList.remove("active-edit");
    colorButton.classList.add("active-edit");
}

const moveObject = () => {
    removeSliders(currentEditTool);
    posSliders.style.display = "grid";
    currentEditTool = "move";
    let activeTool = document.querySelector(".active-edit")
    activeTool.classList.remove("active-edit");
    moveButton.classList.add("active-edit");
}


scaleButton.addEventListener("click", scaleObject)
rotateButton.addEventListener("click", rotateObject)
colorButton.addEventListener("click", colorObject)
moveButton.addEventListener("click", moveObject)
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

    // get latest object (for now)
    currentObjectIndex = engine._root.children.length - 1;
    // set to current object
    currentObject = engine._root.children[currentObjectIndex];

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
function addLeftToolbar() {

    // End session
    const endSession = () => {
        window.history.back();
    }
    endButton.addEventListener("click", endSession)

    // Add button
    const addObject = () => {
        removeSliders(currentEditTool);

        let activeToolbar = document.querySelector(".active-toolbar")
        activeToolbar.classList.remove("active-toolbar");
        activeToolbar.style.display = "none";

        let activeElement = document.querySelector(".active")
        activeElement.classList.remove("active");
        addButton.classList.add("active");
        addToolbar.classList.add("active-toolbar");
        addToolbar.style.display = "flex";
        toolbarInstructions.innerHTML = "Tap an object to add it to the scene";
    }
    addButton.addEventListener("click", addObject)

    // Edit button
    const editObject = () => {
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

        // update sliders to current object
        scaleXSlider.value = currentObject.scale.x
        scaleYSlider.value = currentObject.scale.y
        scaleZSlider.value = currentObject.scale.z
        scaleXOutput.innerHTML = "X: " + scaleXSlider.value;
        scaleYOutput.innerHTML = "Y: " + scaleYSlider.value;
        scaleZOutput.innerHTML = "Z: " + scaleZSlider.value;

        rotateXSlider.value = currentObject.rotation.x
        rotateYSlider.value = currentObject.rotation.y
        rotateZSlider.value = currentObject.rotation.z
        rotateXOutput.innerHTML = "X: " + rotateXSlider.value;
        rotateYOutput.innerHTML = "Y: " + rotateYSlider.value;
        rotateZOutput.innerHTML = "Z: " + rotateZSlider.value;

        redSlider.value = currentObject.material.color.r * 255
        greenSlider.value = currentObject.material.color.g * 255
        blueSlider.value = currentObject.material.color.b * 255
        redOutput.innerHTML = "Red: " + redSlider.value;
        greenOutput.innerHTML = "Green: " + greenSlider.value;
        blueOutput.innerHTML = "Blue: " + blueSlider.value;

        posXSlider.value = currentObject.position.x
        posYSlider.value = currentObject.position.y
        posZSlider.value = currentObject.position.z
        posXOutput.innerHTML = "X: " + posXSlider.value;
        posYOutput.innerHTML = "Y: " + posYSlider.value;
        posZOutput.innerHTML = "Z: " + posZSlider.value;


        let activeToolbar = document.querySelector(".active-toolbar")
        activeToolbar.classList.remove("active-toolbar");
        activeToolbar.style.display = "none";

        let activeElement = document.querySelector(".active")
        activeElement.classList.remove("active");
        editButton.classList.add("active");
        editToolbar.classList.add("active-toolbar");
        editToolbar.style.display = "flex";
        toolbarInstructions.innerHTML = "Tap to select an edit tool";
    }
    editButton.addEventListener("click", editObject)

    // Select / Delete button
    const deleteObject = () => {
        removeSliders(currentEditTool);

        let activeToolbar = document.querySelector(".active-toolbar")
        activeToolbar.classList.remove("active-toolbar");
        activeToolbar.style.display = "none";

        let activeElement = document.querySelector(".active")
        activeElement.classList.remove("active");

        deleteButton.classList.add("active");
        deleteToolbar.classList.add("active-toolbar");
        deleteToolbar.style.display = "flex";

        toolbarInstructions.innerHTML = "Objects:"
        for (let i = 0; i < objectsList.length; i++){
            let geometry = getGeometry(objectsList[i]);
            let id = objectsList[i].id - 13
            let name = objectsList[i].name ? objectsList[i].name : `${id}. ${geometry}`;
            let div = document.createElement('div');
            div.innerHTML = name
            deleteToolbar.append(div);

        }
    }
    deleteButton.addEventListener("click", deleteObject);

    }
initXR();


        