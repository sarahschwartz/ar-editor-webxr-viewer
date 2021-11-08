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
tetrahedronButton.addEventListener("click", function () {
    objectToPlace = "tetrahedron"
    placeObject = true;
})
octahedronButton.addEventListener("click", function () {
    objectToPlace = "octahedron"
    placeObject = true;
})
icosahedronButton.addEventListener("click", function () {
    objectToPlace = "icosahedron"
    placeObject = true;
})
dodecahedronButton.addEventListener("click", function () {
    objectToPlace = "dodecahedron"
    placeObject = true;
})