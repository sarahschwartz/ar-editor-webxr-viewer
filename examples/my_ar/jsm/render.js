function updateScene(engine, currentObjectIndex, currentEditTool, debug) {
    let last = currentObjectIndex
    const editToolbar = document.getElementById('edit-toolbar');

    let scaleIncrement = 0.01;
    let scaleMax = 1.5;
    let scaleX, scaleY, scaleZ;


    // If Edit toolbar is active
    if (editToolbar.classList.contains("active-toolbar")) {
        switch (currentEditTool) {
            case "scale":
                debug.innerHTML = "Scale tool <br>";
                if (engine._root.children[last].scale.x < scaleMax) {
                    scaleX = engine._root.children[last].scale.x + scaleIncrement
                    scaleY = engine._root.children[last].scale.y + scaleIncrement
                    scaleZ = engine._root.children[last].scale.z + scaleIncrement
                    engine._root.children[last].scale.set(scaleX, scaleY, scaleZ);
                }
                break;
            case "rotate":
                debug.innerHTML = "Rotate tool <br>";
                break;
            case "color":
                debug.innerHTML = "Color tool <br>";
                break;
            case "move":
                debug.innerHTML = "Move tool <br>";
                break;
            default:
                debug.innerHTML = "no tool selected"
        }


        // switch (engine._root.children[last].geometry.type) {
        //     case "CylinderGeometry":
        //         debug.innerHTML = "Cylinder";
        //         engine._root.children[last].scale.set(2, 2, 2);
        //         engine._root.children[last].position.set(-0.5, 0, -0.5);
        //         debug.innerHTML += " Scale: " + JSON.stringify(engine._root.children[last].scale);
        //         break;
        //     case "BoxBufferGeometry":
        //         debug.innerHTML = "Box";
        //         debug.innerHTML += " Scale: " + JSON.stringify(engine._root.children[last].scale);
        //         debug.innerHTML += " Width: " + engine._root.children[last].geometry.parameters.width;
        //         debug.innerHTML += " Height: " + engine._root.children[last].geometry.parameters.height;
        //         debug.innerHTML += " Depth: " + engine._root.children[last].geometry.parameters.depth;
        //         break;
        //     case "SphereBufferGeometry":
        //         debug.innerHTML = "Sphere";
        //         debug.innerHTML += " Radius: " + engine._root.children[last].geometry.parameters.radius;
        //         break;
        //     case "PlaneGeometry":
        //         debug.innerHTML = "Plane";
        //         debug.innerHTML += " Width: " + engine._root.children[last].geometry.parameters.width;
        //         debug.innerHTML += " Height: " + engine._root.children[last].geometry.parameters.height;
        //         break;
        //     default:
        //         debug.innerHTML = "Geometry not found "
        // }
        debug.innerHTML += "Current edit tool: " + currentEditTool
    }
}

export { updateScene }


