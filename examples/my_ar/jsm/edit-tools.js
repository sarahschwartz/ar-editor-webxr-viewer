function editTools(engine, position, scale, color, debug) {

    
    let isScaling = false;
    let currentGeometry;
    
    const scaleButton = document.getElementById('scale-button');
    const rotateButton = document.getElementById('rotate-button');
    const colorButton = document.getElementById('color-button');
    const moveButton = document.getElementById('move-button');


    const scaleObject = () => {
        isScaling = true;
        let last = engine._root.children.length - 1;
        switch (engine._root.children[last].geometry.type) {
            case "CylinderGeometry":
                currentGeometry = "Cylinder";
                debug.innerHTML = "Cylinder";
                debug.innerHTML += " Radius Top: " + engine._root.children[last].geometry.parameters.radiusTop;
                debug.innerHTML += " Radius Bottom: " + engine._root.children[last].geometry.parameters.radiusBottom;
                debug.innerHTML += " Height: " + engine._root.children[last].geometry.parameters.height;
                break;
            case "BoxBufferGeometry":
                currentGeometry = "Box";
                debug.innerHTML = "Box";
                debug.innerHTML += " Scale: " + JSON.stringify(engine._root.children[last].scale);
                debug.innerHTML += " Width: " + engine._root.children[last].geometry.parameters.width;
                debug.innerHTML += " Height: " + engine._root.children[last].geometry.parameters.height;
                debug.innerHTML += " Depth: " + engine._root.children[last].geometry.parameters.depth;
                break;
            case "SphereBufferGeometry":
                currentGeometry = "Sphere";
                debug.innerHTML = "Sphere";
                debug.innerHTML += " Radius: " + engine._root.children[last].geometry.parameters.radius;
                break;
            case "PlaneGeometry":
                currentGeometry = "Plane";
                debug.innerHTML = "Plane";
                debug.innerHTML += " Width: " + engine._root.children[last].geometry.parameters.width;
                debug.innerHTML += " Height: " + engine._root.children[last].geometry.parameters.height;
                break;
            default:
                currentGeometry = null;
                debug.innerHTML = "No Geometry Case";
        }
        debug.innerHTML += "<br>PARAMS: " + JSON.stringify(engine._root.children[last].geometry.parameters);
    }

    const rotateObject = () => {
        let last = engine._root.children.length - 1;
        debug.innerHTML = JSON.stringify(engine._root.children[last].rotation);
    }          


    const colorObject = () => {
        let last = engine._root.children.length - 1;
        debug.innerHTML = "Red: " + JSON.stringify(engine._root.children[last].material.color.r);
        debug.innerHTML += " Green: " + JSON.stringify(engine._root.children[last].material.color.g);
        debug.innerHTML += " Blue: " + JSON.stringify(engine._root.children[last].material.color.b);
    }

    const moveObject = () => {
        let last = engine._root.children.length - 1;
        debug.innerHTML = JSON.stringify(engine._root.children[last].position);
    }


    scaleButton.addEventListener("click", scaleObject)
    rotateButton.addEventListener("click", rotateObject)
    colorButton.addEventListener("click", colorObject)
    moveButton.addEventListener("click", moveObject)

    
}

export { editTools };