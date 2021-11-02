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
import { addMaterialButtons } from './jsm/material-textures.js';

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
        case "opacity":
            opacitySlider.style.display = "none";
            break;
        case "transmission":
            transmissionSlider.style.display = "none";
            break;
        case "sheen":
            sheenSlider.style.display = "none";
            break;
        case "sheen-color":
            sheenColorSliders.style.display = "none";
            break;
        case "sheen-roughness":
            sheenRoughnessSlider.style.display = "none";
            break;
        case "roughness":
            roughnessSlider.style.display = "none";
            break;
        case "metalness":
            metalnessSlider.style.display = "none";
            break;
        case "reflection":
            reflectionSlider.style.display = "none";
            break;
        case "clearcoat":
            clearcoatSlider.style.display = "none";
            break;
        case "clearcoat-roughness":
            clearcoatRoughnessSlider.style.display = "none";
            break;
        case "thickness":
            thicknessSlider.style.display = "none";
            break;
        case "emissive-intensity":
            emissiveIntensitySlider.style.display = "none";
            break;
        case "emissive-color":
            emissiveColorSliders.style.display = "none";
            break;
        case "wireframe-thickness":
            wireframeThicknessSlider.style.display = "none";
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


    editToolsOutput.singleSlider(opacitySliderInput, opacitySliderOutput);
    editToolsOutput.singleSlider(transmissionSliderInput, transmissionSliderOutput);
    editToolsOutput.singleSlider(sheenSliderInput, sheenSliderOutput);
    editToolsOutput.singleSlider(sheenRoughnessSliderInput, sheenRoughnessSliderOutput);
    editToolsOutput.singleSlider(roughnessSliderInput, roughnessSliderOutput);
    editToolsOutput.singleSlider(metalnessSliderInput, metalnessSliderOutput);
    editToolsOutput.singleSlider(reflectionSliderInput, reflectionSliderOutput);
    editToolsOutput.singleSlider(clearcoatSliderInput, clearcoatSliderOutput);
    editToolsOutput.singleSlider(clearcoatRoughnessSliderInput, clearcoatRoughnessSliderOutput);
    editToolsOutput.singleSlider(thicknessSliderInput, thicknessSliderOutput);
    editToolsOutput.singleSlider(wireframeThicknessSliderInput, wireframeThicknessSliderOutput);
    editToolsOutput.singleSlider(emissiveIntensitySliderInput, emissiveIntensitySliderOutput);
    
    editToolsOutput.colorSlider(sheenRedSlider,
        sheenGreenSlider,
        sheenBlueSlider,
        sheenRedOutput,
        sheenGreenOutput,
        sheenBlueOutput);
    
    editToolsOutput.colorSlider(ecRedSlider,
        ecGreenSlider,
        ecBlueSlider,
        ecRedOutput,
        ecGreenOutput,
        ecBlueOutput);

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

    scaleButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "scale";
        changeEditTool(scaleButton, scaleSliders);
    })

    rotateButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "rotate";
        changeEditTool(rotateButton, rotateSliders);
    })

    colorButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "color";
        changeEditTool(colorButton, colorSliders);
    })

    moveButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "move";
        changeEditTool(moveButton, posSliders);
    })

    opacityButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "opacity";
        changeEditTool(opacityButton, opacitySlider);
    })

    transmissionButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "transmission";
        changeEditTool(transmissionButton, transmissionSlider);
    })

    sheenButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "sheen";
        changeEditTool(sheenButton, sheenSlider);
    })

    sheenColorButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "sheen-color";
        changeEditTool(sheenColorButton, sheenColorSliders);
    })

    sheenRoughnessButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "sheen-roughness";
        changeEditTool(sheenRoughnessButton, sheenRoughnessSlider);
    })

    roughnessButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "roughness";
        changeEditTool(roughnessButton, roughnessSlider);
    })

    metalnessButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "metalness";
        changeEditTool(metalnessButton, metalnessSlider);
    })

    reflectionButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "reflection";
        changeEditTool(reflectionButton, reflectionSlider);
    })

    clearcoatButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "clearcoat";
        changeEditTool(clearcoatButton, clearcoatSlider);
    })

    clearcoatRoughnessButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "clearcoat-roughness";
        changeEditTool(clearcoatRoughnessButton, clearcoatRoughnessSlider);
    })

    thicknessButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "thickness";
        changeEditTool(thicknessButton, thicknessSlider);
    })

    emissiveIntensityButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "emissive-intensity";
        changeEditTool(emissiveIntensityButton, emissiveIntensitySlider);
    })

    emissiveColorButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "emissive-color";
        changeEditTool(emissiveColorButton, emissiveColorSliders);
    })

    wireframeButton.addEventListener("click", () => {
        currentObject.material.wireframe = !currentObject.material.wireframe;
    })

    wireframeThicknessButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        currentEditTool = "wireframe-thickness";
        changeEditTool(wireframeThicknessButton, wireframeThicknessSlider);
    })

    textureButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        changeMainTool("none", textureToolbar);
    })

    materialsButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        changeMainTool("none", materialsToolbar)
    })

    patternTextureButton.addEventListener("click", () => {
        removeSliders(currentEditTool);
        changeMainTool("none", patternTexturesToolbar)
    })

    removeTextureButton.addEventListener("click", () => {
        let material = new THREE.MeshStandardMaterial({
            color: color,
            side: THREE.DoubleSide
        })
        currentObject.material = material;
    })

    addMaterialButtons();
    
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

    //update edit tool slider values

    scaleX = scaleXSlider.value;
    scaleY = scaleYSlider.value;
    scaleZ = scaleZSlider.value;

    rotateX = rotateXSlider.value;
    rotateY = rotateYSlider.value;
    rotateZ = rotateZSlider.value;

    redVal = redSlider.value;
    greenVal = greenSlider.value;
    blueVal = blueSlider.value;
    color = new THREE.Color("rgb(" + redVal + "," + greenVal + "," + blueVal + ")");

    posX = posXSlider.value;
    posY = posYSlider.value;
    posZ = posZSlider.value;

    opacity = opacitySliderInput.value
    transmission = transmissionSliderInput.value
    sheen = sheenSliderInput.value
    sheenRoughness = sheenRoughnessSliderInput.value
    sheenRedVal = sheenRedSlider.value
    sheenGreenVal = sheenGreenSlider.value
    sheenBlueVal = sheenBlueSlider.value
    sheenColor = new THREE.Color("rgb(" + sheenRedVal + "," + sheenGreenVal + "," + sheenBlueVal + ")");

    roughness = roughnessSliderInput.value
    metalness = metalnessSliderInput.value
    reflection = reflectionSliderInput.value
    clearcoat = clearcoatSliderInput.value
    clearcoatRoughness = clearcoatRoughnessSliderInput.value
    thickness = thicknessSliderInput.value
    wireframeThickness = wireframeThicknessSliderInput.value
    emissiveIntensity = emissiveIntensitySliderInput.value

    ecRedVal = ecRedSlider.value;
    ecGreenVal = ecGreenSlider.value;
    ecBlueVal = ecBlueSlider.value;
    ecColor = new THREE.Color("rgb(" + ecRedVal + "," + ecGreenVal + "," + ecBlueVal + ")");

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
            opacity,
            transmission,
            sheen,
            sheenColor,
            sheenRoughness,
            roughness,
            metalness,
            reflection,
            clearcoat,
            clearcoatRoughness,
            thickness,
            emissiveIntensity,
            ecColor,
            wireframeThickness
        );
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

            // Scale
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
           // Rotation
            rotateXSlider.value = currentObject.rotation.x * 180 / Math.PI;
            rotateYSlider.value = currentObject.rotation.y * 180 / Math.PI;
            rotateZSlider.value = currentObject.rotation.z * 180 / Math.PI;
            rotateXOutput.innerHTML = `X: ${rotateXSlider.value}°`;
            rotateYOutput.innerHTML = `Y: ${rotateYSlider.value}°`;
            rotateZOutput.innerHTML = `Z: ${rotateZSlider.value}°`;
            // Color
            redSlider.value = currentObject.material.color.r * 255
            greenSlider.value = currentObject.material.color.g * 255
            blueSlider.value = currentObject.material.color.b * 255
            redOutput.innerHTML = "Red: " + redSlider.value;
            greenOutput.innerHTML = "Green: " + greenSlider.value;
            blueOutput.innerHTML = "Blue: " + blueSlider.value;
            //Position
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

            //Opacity
            opacitySliderInput.value = currentObject.material.opacity;
            opacitySliderOutput.innerHTML = `${opacitySliderInput.value}`;

            // Transmission
            transmissionSliderInput.value = currentObject.material.transmission;
            transmissionSliderOutput.innerHTML = `${transmissionSliderInput.value}`;

            // Sheen
            sheenSliderInput.value = currentObject.material.sheen;
            sheenSliderOutput.innerHTML = `${sheenSliderInput.value}`;

            //Sheen Roughness
            sheenRoughnessSliderInput.value = currentObject.material.sheenRoughness;
            sheenRoughnessSliderOutput.innerHTML = `${sheenRoughnessSliderInput.value}`;

            // Sheen Colors
            sheenRedSlider.value = currentObject.material.sheenColor.r * 255;
            sheenGreenSlider.value = currentObject.material.sheenColor.g * 255;
            sheenBlueSlider.value = currentObject.material.sheenColor.b * 255;
            sheenRedOutput.innerHTML = "Red: " + sheenRedSlider.value;
            sheenGreenOutput.innerHTML = "Green: " + sheenGreenSlider.value;
            sheenBlueOutput.innerHTML = "Blue: " + sheenBlueSlider.value;

            //Roughness
            roughnessSliderInput.value = currentObject.material.roughness;
            roughnessSliderOutput.innerHTML = `${roughnessSliderInput.value}`;

            //Metalness
            metalnessSliderInput.value = currentObject.material.metalness;
            metalnessSliderOutput.innerHTML = `${metalnessSliderInput.value}`;

            // Reflection
            reflectionSliderInput.value = currentObject.material.reflectivity;
            reflectionSliderOutput.innerHTML = `${reflectionSliderInput.value}`;

            // Clearcoat
            clearcoatSliderInput.value = currentObject.material.clearcoat;
            clearcoatSliderOutput.innerHTML = `${clearcoatSliderInput.value}`;

            // Clearcoat Roughness
            clearcoatRoughnessSliderInput.value = currentObject.material.clearcoatRoughness;
            clearcoatRoughnessSliderOutput.innerHTML = `${clearcoatRoughnessSliderInput.value}`;

            // Thickness
            thicknessSliderInput.value = currentObject.material.thickness;
            thicknessSliderOutput.innerHTML = `${thicknessSliderInput.value}`;

            // Wireframe Thickness
            wireframeThicknessSliderInput.value = currentObject.material.wireframeThickness;
            wireframeThicknessSliderOutput.innerHTML = `${wireframeThicknessSliderInput.value}`;

            // Emissive Intensity
            emissiveIntensitySliderInput.value = currentObject.material.emissiveIntensity ;
            emissiveIntensitySliderOutput.innerHTML = `${emissiveIntensitySliderInput.value}`;

            // Emissive Colors
            ecRedSlider.value = currentObject.material.emissive.r * 255
            ecGreenSlider.value = currentObject.material.emissive.g * 255
            ecBlueSlider.value = currentObject.material.emissive.b * 255
            ecRedOutput.innerHTML = "Red: " + ecRedSlider.value;
            ecGreenOutput.innerHTML = "Green: " + ecGreenSlider.value;
            ecBlueOutput.innerHTML = "Blue: " + ecBlueSlider.value;
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
            case "opacity":
                opacitySlider.style.display = "grid";
                break;
            case "transmission":
                transmissionSlider.style.display = "grid";
                break;
            case "sheen":
                sheenSlider.style.display = "grid";
                break;
            case "sheen-roughness":
                sheenRoughnessSlider.style.display = "grid";
                break;
            case "sheen-color":
                sheenColorSliders.style.display = "grid";
                break;
            case "roughness":
                roughnessSlider.style.display = "grid";
                break;
            case "metalness":
                metalnessSlider.style.display = "grid";
                break;
            case "reflection":
                reflectionSlider.style.display = "grid";
                break;
            case "clearcoat":
                clearcoatSlider.style.display = "grid";
                break;
            case "clearcoat-roughness":
                clearcoatRoughnessSlider.style.display = "grid";
                break;
            case "thickness":
                thicknessSlider.style.display = "grid";
                break;
            case "wireframe-thickness":
                wireframeThicknessSlider.style.display = "grid";
                break;
            case "emissive-intensity":
                emissiveIntensitySlider.style.display = "grid";
                break;
            case "emissive-color":
                emissiveColorSliders.style.display = "grid";
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


        