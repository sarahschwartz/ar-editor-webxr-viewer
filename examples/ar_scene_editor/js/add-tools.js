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