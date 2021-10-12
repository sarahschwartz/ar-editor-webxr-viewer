function addTools(engine, sceneObjects, position, scale, color, debug) {

    
    const cubeButton = document.getElementById('cube-button');
    const sphereButton = document.getElementById('sphere-button');
    const cylinderButton = document.getElementById('cylinder-button');
    const planeButton = document.getElementById('plane-button');

        // Add a cube
    const addCube = () => {
        engine.addBox(position, scale, color);
    }

    // Add a sphere
    const addSphere = () => {
        engine.addSphere(position, scale, color);
        debug.innerHTML = sceneObjects.length
    }

    // Add a cylinder
    const addCylinder = () => {
        engine.addCylinder(position, scale, color);
    }

    // Add a plane
    const addPlane = () => {
        engine.addPlane(position, scale, color);
    }

    cubeButton.addEventListener("click", addCube)
    sphereButton.addEventListener("click", addSphere)
    cylinderButton.addEventListener("click", addCylinder)
    planeButton.addEventListener("click", addPlane)
    
}

export { addTools };