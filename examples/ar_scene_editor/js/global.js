let session = null;
let localReferenceSpace = null;
let viewerReferenceSpace = null;
let engine = null;

let hitTestSource = null;

let isAdding = false;
let placeObject = false;
let placeModel = false;
let modelPath;
let modelScale;
let modelName;
let objectToPlace;

let loader;

// Start AR session button
const goButton = document.getElementById('go-button');

const toolbarInstructions = document.getElementById('toolbar-instructions')

// Main Toolbar
const endButton = document.getElementById('end-session');
const addButton = document.getElementById('add-button');
const editButton = document.getElementById('edit-button');
const selectButton = document.getElementById('select-button');

// Sub Toolbars
const mainToolbar = document.getElementById('main-toolbar');
const addToolbar = document.getElementById('add-toolbar');
const addShapeToolbar = document.getElementById('add-shape-toolbar');
const addModelsToolbar = document.getElementById('add-models-1-toolbar');
const editToolbar = document.getElementById('edit-toolbar');
const selectToolbar = document.getElementById('select-toolbar');
const textureToolbar = document.getElementById('texture-toolbar');
const materialsToolbar = document.getElementById('materials-toolbar');
const patternTexturesToolbar = document.getElementById('pattern-textures-toolbar');
const menuBackButtons = document.querySelectorAll('.menu-back-button')
const addMenuBackButtons = document.querySelectorAll('.add-menu-back-button')
const editMenuBackButtons = document.querySelectorAll('.edit-menu-back-button')
const textureMenuBackButtons = document.querySelectorAll('.texture-menu-back-button')

// Add Shape Tools
const addShapeButton = document.getElementById('shapes-button');
const cubeButton = document.getElementById('cube-button');
const sphereButton = document.getElementById('sphere-button');
const cylinderButton = document.getElementById('cylinder-button');
const planeButton = document.getElementById('plane-button');
const coneButton = document.getElementById('cone-button');
const torusButton = document.getElementById('torus-button');
const ringButton = document.getElementById('ring-button');


// Add Models
const addModelsButton = document.getElementById('models-1-button');
const suzanneButton = document.getElementById('suzanne-button');
const benchButton = document.getElementById('bench-button');

// Edit Tools
const scaleButton = document.getElementById('scale-button');
const rotateButton = document.getElementById('rotate-button');
const colorButton = document.getElementById('color-button');
const moveButton = document.getElementById('move-button');
const opacityButton = document.getElementById('opacity-button');
const transmissionButton = document.getElementById('transmission-button');
const sheenButton = document.getElementById('sheen-button');
const sheenColorButton = document.getElementById('sheen-color-button');
const sheenRoughnessButton = document.getElementById('sheen-roughness-button');
const roughnessButton = document.getElementById('roughness-button');
const metalnessButton = document.getElementById('metalness-button');
const reflectionButton = document.getElementById('reflection-button');
const clearcoatButton = document.getElementById('clearcoat-button');
const clearcoatRoughnessButton = document.getElementById('clearcoat-roughness-button');
const iorButton = document.getElementById('ior-button');
const thicknessButton = document.getElementById('thickness-button');
const emissiveIntensityButton = document.getElementById('emissive-intensity-button');
const emissiveColorButton = document.getElementById('emissive-color-button');
const wireframeButton = document.getElementById('wireframe-button');
const textureButton = document.getElementById('texture-button');

// Scale Sliders
const scaleSliders = document.getElementById("scale-sliders");
const scaleXSlider = document.getElementById("scaleX-slider-input");
const scaleYSlider = document.getElementById("scaleY-slider-input");
const scaleZSlider = document.getElementById("scaleZ-slider-input");
const scaleXOutput = document.getElementById("scaleX-slider-output");
const scaleYOutput = document.getElementById("scaleY-slider-output");
const scaleZOutput = document.getElementById("scaleZ-slider-output");

// Rotation Sliders
const rotateSliders = document.getElementById("rotate-sliders");
const rotateXSlider = document.getElementById("rotateX-slider-input");
const rotateYSlider = document.getElementById("rotateY-slider-input");
const rotateZSlider = document.getElementById("rotateZ-slider-input");
const rotateXOutput = document.getElementById("rotateX-slider-output");
const rotateYOutput = document.getElementById("rotateY-slider-output");
const rotateZOutput = document.getElementById("rotateZ-slider-output");

// Color Sliders
const colorSliders = document.getElementById('color-sliders');
const redSlider = document.getElementById("red-slider-input");
const greenSlider = document.getElementById("green-slider-input");
const blueSlider = document.getElementById("blue-slider-input");
const redOutput = document.getElementById("red-slider-output");
const greenOutput = document.getElementById("green-slider-output");
const blueOutput = document.getElementById("blue-slider-output");

// Position Sliders
const posSliders = document.getElementById('position-sliders');
const posXSlider = document.getElementById("posX-slider-input");
const posYSlider = document.getElementById("posY-slider-input");
const posZSlider = document.getElementById("posZ-slider-input");
const posXOutput = document.getElementById("posX-slider-output");
const posYOutput = document.getElementById("posY-slider-output");
const posZOutput = document.getElementById("posZ-slider-output");

// Opacity Slider
const opacitySlider = document.getElementById('opacity-slider')
const opacitySliderInput = document.getElementById('opacity-slider-input')
const opacitySliderOutput = document.getElementById('opacity-slider-output')

// Transmission Slider
const transmissionSlider = document.getElementById('transmission-slider')
const transmissionSliderInput = document.getElementById('transmission-slider-input')
const transmissionSliderOutput = document.getElementById('transmission-slider-output')

// Sheen Slider
const sheenSlider = document.getElementById('sheen-slider')
const sheenSliderInput = document.getElementById('sheen-slider-input')
const sheenSliderOutput = document.getElementById('sheen-slider-output')

// Sheen Color Sliders
const sheenColorSliders = document.getElementById('sheen-color-sliders');
const sheenRedSlider = document.getElementById("sheen-red-slider-input");
const sheenGreenSlider = document.getElementById("sheen-green-slider-input");
const sheenBlueSlider = document.getElementById("sheen-blue-slider-input");
const sheenRedOutput = document.getElementById("sheen-red-slider-output");
const sheenGreenOutput = document.getElementById("sheen-green-slider-output");
const sheenBlueOutput = document.getElementById("sheen-blue-slider-output");

// Sheen Roughness Slider
const sheenRoughnessSlider = document.getElementById('sheen-roughness-slider')
const sheenRoughnessSliderInput = document.getElementById('sheen-roughness-slider-input')
const sheenRoughnessSliderOutput = document.getElementById('sheen-roughness-slider-output')

// Roughness Slider
const roughnessSlider = document.getElementById('roughness-slider')
const roughnessSliderInput = document.getElementById('roughness-slider-input')
const roughnessSliderOutput = document.getElementById('roughness-slider-output')

// Metalness Slider
const metalnessSlider = document.getElementById('metalness-slider')
const metalnessSliderInput = document.getElementById('metalness-slider-input')
const metalnessSliderOutput = document.getElementById('metalness-slider-output')

// Reflection Slider
const reflectionSlider = document.getElementById('reflection-slider')
const reflectionSliderInput = document.getElementById('reflection-slider-input')
const reflectionSliderOutput = document.getElementById('reflection-slider-output')

// Clearcoat Slider
const clearcoatSlider = document.getElementById('clearcoat-slider')
const clearcoatSliderInput = document.getElementById('clearcoat-slider-input')
const clearcoatSliderOutput = document.getElementById('clearcoat-slider-output')

// Clearcoat Roughness Slider
const clearcoatRoughnessSlider = document.getElementById('clearcoat-roughness-slider')
const clearcoatRoughnessSliderInput = document.getElementById('clearcoat-roughness-slider-input')
const clearcoatRoughnessSliderOutput = document.getElementById('clearcoat-roughness-slider-output')

// Ior Slider
const iorSlider = document.getElementById('ior-slider')
const iorSliderInput = document.getElementById('ior-slider-input')
const iorSliderOutput = document.getElementById('ior-slider-output')

// Thickness Slider
const thicknessSlider = document.getElementById('thickness-slider')
const thicknessSliderInput = document.getElementById('thickness-slider-input')
const thicknessSliderOutput = document.getElementById('thickness-slider-output')

// Emissive Intensity Slider
const emissiveIntensitySlider = document.getElementById('emissive-intensity-slider')
const emissiveIntensitySliderInput = document.getElementById('emissive-intensity-slider-input')
const emissiveIntensitySliderOutput = document.getElementById('emissive-intensity-slider-output')

// Emissive Color Sliders
const emissiveColorSliders = document.getElementById('emissive-color-sliders');
const ecRedSlider = document.getElementById("ec-red-slider-input");
const ecGreenSlider = document.getElementById("ec-green-slider-input");
const ecBlueSlider = document.getElementById("ec-blue-slider-input");
const ecRedOutput = document.getElementById("ec-red-slider-output");
const ecGreenOutput = document.getElementById("ec-green-slider-output");
const ecBlueOutput = document.getElementById("ec-blue-slider-output");

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

let opacity = opacitySliderInput.value
let transmission = transmissionSliderInput.value
let sheen = sheenSliderInput.value
let sheenRoughness = sheenRoughnessSliderInput.value
let sheenRedVal = sheenRedSlider.value;
let sheenGreenVal = sheenGreenSlider.value;
let sheenBlueVal = sheenBlueSlider.value;
let roughness = roughnessSliderInput.value
let metalness = metalnessSliderInput.value
let reflection = reflectionSliderInput.value
let clearcoat = clearcoatSliderInput.value
let clearcoatRoughness = clearcoatRoughnessSliderInput.value
let ior = iorSliderInput.value
let thickness = thicknessSliderInput.value
let emissiveIntensity = emissiveIntensitySliderInput.value

let ecRedVal = ecRedSlider.value;
let ecGreenVal = ecGreenSlider.value;
let ecBlueVal = ecBlueSlider.value;

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

// pattern texture buttons
const texture1Button = document.getElementById('texture1-button');
const texture2Button = document.getElementById('texture2-button');
const texture3Button = document.getElementById('texture3-button');
const texture4Button = document.getElementById('texture4-button');
const texture5Button = document.getElementById('texture5-button');
const texture6Button = document.getElementById('texture6-button');

let color = new THREE.Color(redVal, greenVal, blueVal);
let ecColor = new THREE.Color(ecRedVal, ecGreenVal, ecBlueVal);
let sheenColor = new THREE.Color(sheenRedVal, sheenGreenVal, sheenBlueVal);
let position = [posX, posY, posZ];
let scale = [0.1, 0.1, 0.1];

// Debug Box
const debug = document.getElementById('debug');


function disableMaterialButtons() {
    removeSliders(currentEditTool);
    currentEditTool = "scale";
    changeEditTool(scaleButton, scaleSliders);

    scaleButton.firstElementChild.classList.add("active-edit");
    colorButton.style.display = "none";
    opacityButton.style.display = "none";
    transmissionButton.style.display = "none";
    sheenButton.style.display = "none";
    sheenColorButton.style.display = "none";
    sheenRoughnessButton.style.display = "none";
    roughnessButton.style.display = "none";
    metalnessButton.style.display = "none";
    reflectionButton.style.display = "none";
    clearcoatButton.style.display = "none";
    clearcoatRoughnessButton.style.display = "none";
    iorButton.style.display = "none";
    thicknessButton.style.display = "none";
    emissiveIntensityButton.style.display = "none";
    emissiveColorButton.style.display = "none";
    wireframeButton.style.display = "none";
    // textureButton.style.display = "none";
}

function enableMaterialButtons() {
    colorButton.style.display = "flex";
    opacityButton.style.display = "flex";
    transmissionButton.style.display = "flex";
    sheenButton.style.display = "flex";
    sheenColorButton.style.display = "flex";
    sheenRoughnessButton.style.display = "flex";
    roughnessButton.style.display = "flex";
    metalnessButton.style.display = "flex";
    reflectionButton.style.display = "flex";
    clearcoatButton.style.display = "flex";
    clearcoatRoughnessButton.style.display = "flex";
    iorButton.style.display = "flex";
    thicknessButton.style.display = "flex";
    emissiveIntensityButton.style.display = "flex";
    emissiveColorButton.style.display = "flex";
    wireframeButton.style.display = "flex";
    // textureButton.style.display = "flex";
}

let goBack = true;


history.pushState(null, null, location.href);
window.onpopstate = function (event) {
    if (!goBack) {
        history.go(1);
    } else {
        window.history.back();
    }
}
