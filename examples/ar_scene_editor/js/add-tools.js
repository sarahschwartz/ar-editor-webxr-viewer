////////////////////// Add Tools///////////////////////////

 // Add Button
addButton.addEventListener("click", () => {
    changeMainTool(addButton, addToolbar);
})

// Add Shapes Button
addShapeButton.addEventListener("click", () => {
    isAdding = true;
    changeMainTool(addShapeButton, addShapeToolbar);
})

// Add Seating Button
addSeatingButton.addEventListener("click", () => {
    isAdding = true;
    changeMainTool(addSeatingButton, addSeatingToolbar);
})

// Add Models 1 Button
addModels1Button.addEventListener("click", () => {
     isAdding = true;
    changeMainTool(addModels1Button, addModels1Toolbar);
})
        
const setLastObject = () => {
    currentObjectIndex = engine._scene.children.length - 1;
}

cubeButton.addEventListener("click", function () {
    objectToPlace = "cube"
    placeObject = true;
    // setLastObject();
})
sphereButton.addEventListener("click", function () {
    objectToPlace = "sphere"
    placeObject = true;
    setLastObject();
})
cylinderButton.addEventListener("click", function () {
    objectToPlace = "cylinder"
    placeObject = true;
    setLastObject();
})
planeButton.addEventListener("click", function () {
    objectToPlace = "plane"
    placeObject = true;
    setLastObject();
})
coneButton.addEventListener("click", function () {
    objectToPlace = "cone"
    placeObject = true;
    setLastObject();
})
torusButton.addEventListener("click", function () {
    objectToPlace = "torus"
    placeObject = true;
    setLastObject();
})
ringButton.addEventListener("click", function () {
    objectToPlace = "ring"
    placeObject = true;
    setLastObject();
})
tetrahedronButton.addEventListener("click", function () {
    objectToPlace = "tetrahedron"
    placeObject = true;
    setLastObject();
})
octahedronButton.addEventListener("click", function () {
    objectToPlace = "octahedron"
    placeObject = true;
    setLastObject();
})
icosahedronButton.addEventListener("click", function () {
    objectToPlace = "icosahedron"
    placeObject = true;
    setLastObject();
})
dodecahedronButton.addEventListener("click", function () {
    objectToPlace = "dodecahedron"
    placeObject = true;
    setLastObject();
})