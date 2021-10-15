function updateScene(currentObject,
    currentEditTool,
    editToolbar,
    removeSliders,
    rotateSliders,
    colorSliders,
    color,
    scaleIncrement,
    scaleMax,
    posSliders,
    posX,
    posY,
    posZ,
    debug) {
    
    let scaleX, scaleY, scaleZ;

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
                removeSliders(rotateSliders);
                removeSliders(colorSliders);
                removeSliders(posSliders);
                break;
            case "rotate":
                debug.innerHTML = "Rotate tool <br>";
                rotateSliders.style.display = "grid";
                currentObject.rotation.y = currentObject.rotation.y + 0.01;
                removeSliders(colorSliders);
                removeSliders(posSliders);
                break;
            case "color":
                debug.innerHTML = "Color tool <br>";
                if (currentObject.material.color !== color) {
                    currentObject.material.color = color;
                }
                colorSliders.style.display = "grid";
                removeSliders(rotateSliders);
                removeSliders(posSliders);
                break;
            case "move":
                debug.innerHTML = "Move tool <br>";
                posSliders.style.display = "grid";
                if (currentObject.position.x !== posX || currentObject.position.y !== posY || currentObject.position.z !== posZ) {
                    currentObject.position.set(posX, posY, posZ);
                }
                removeSliders(rotateSliders);
                removeSliders(colorSliders);
                break;
            default:
                debug.innerHTML = "no tool selected"
        }

        debug.innerHTML += "Current edit tool: " + currentEditTool

    } else {
        removeSliders(rotateSliders);
        removeSliders(colorSliders);
        removeSliders(posSliders);
        
    }
}

export { updateScene }


