function updateScene(currentObject,
    currentEditTool,
    editToolbar,
    colorSliders, 
    debug) {

    

    let scaleIncrement = 0.01;
    let scaleMax = 1.5;
    let scaleX, scaleY, scaleZ;

    const removeColorSliders = () => {
        if (colorSliders.style.display === "grid") {
            colorSliders.style.display = "none";
        }
    }


    // If Edit toolbar is active
    if (editToolbar.classList.contains("active-toolbar")) {
        switch (currentEditTool) {
            case "scale":
                debug.innerHTML = "Scale tool <br>";
                if (currentObject.scale.x < scaleMax) {
                    scaleX = currentObject.scale.x + scaleIncrement
                    scaleY = currentObject.scale.y + scaleIncrement
                    scaleZ = currentObject.scale.z + scaleIncrement
                    currentObject.scale.set(scaleX, scaleY, scaleZ);
                }
                removeColorSliders();
                break;
            case "rotate":
                debug.innerHTML = "Rotate tool <br>";
                removeColorSliders();
                break;
            case "color":
                debug.innerHTML = "Color tool <br>";
                colorSliders.style.display = "grid";
                break;
            case "move":
                debug.innerHTML = "Move tool <br>";
                removeColorSliders();
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

    } else {
        removeColorSliders();
        
    }
}

export { updateScene }


