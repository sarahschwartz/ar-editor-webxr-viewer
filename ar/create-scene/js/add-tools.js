// Clone
const addCloneButton = document.getElementById('clone-button');

////////////////////// Add Tools///////////////////////////

 // Add Button
addButton.addEventListener("click", () => {
    isAdding = true;
    changeMainTool(addButton, addToolbar);
})

// Add Shapes Button
addShapeButton.addEventListener("click", () => {
    isAdding = true;
    changeMainTool(addShapeButton, addShapeToolbar);
})

// Add Models Button
addModelsButton.addEventListener("click", () => {
     isAdding = true;
    changeMainTool(addModelsButton, addModelsToolbar);
})

// Clone Button
addCloneButton.addEventListener("click", () => {
    const clone = currentObject.clone()
    objectsList.push(clone)
    engine._scene.add(clone);
    currentObjectIndex = engine._scene.children.length - 1;
})


////////////////////// Add Shapes Buttons ///////////////////////////

cubeButton.addEventListener("click", function () {
    objectToPlace = "cube"
    placeObject = true;
})

sphereButton.addEventListener("click", function () {
    objectToPlace = "sphere"
    placeObject = true;
})
cylinderButton.addEventListener("click", function () {
    objectToPlace = "cylinder"
    placeObject = true;
})
planeButton.addEventListener("click", function () {
    objectToPlace = "plane"
    placeObject = true;
})
coneButton.addEventListener("click", function () {
    objectToPlace = "cone"
    placeObject = true;
})
torusButton.addEventListener("click", function () {
    objectToPlace = "torus"
    placeObject = true;
})
ringButton.addEventListener("click", function () {
    objectToPlace = "ring"
    placeObject = true;
})