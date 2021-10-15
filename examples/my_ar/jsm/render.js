function updateScene(currentObject,
    currentEditTool,
    editToolbar,
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

    const removeRotateSliders = () => {
        if (rotateSliders.style.display === "grid") {
            rotateSliders.style.display = "none";
        }
    }

    const removeColorSliders = () => {
        if (colorSliders.style.display === "grid") {
            colorSliders.style.display = "none";
        }
    }

    const removePosSliders = () => {
        if (posSliders.style.display === "grid") {
            posSliders.style.display = "none";
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
                removeRotateSliders();
                removeColorSliders();
                removePosSliders();
                break;
            case "rotate":
                debug.innerHTML = "Rotate tool <br>";
                rotateSliders.style.display = "grid";
                currentObject.rotation.y = currentObject.rotation.y + 0.01;
                removeColorSliders();
                removePosSliders();
                break;
            case "color":
                debug.innerHTML = "Color tool <br>";
                if (currentObject.material.color !== color) {
                    currentObject.material.color = color;
                }
                colorSliders.style.display = "grid";
                removeRotateSliders();
                removePosSliders();
                break;
            case "move":
                debug.innerHTML = "Move tool <br>";
                posSliders.style.display = "grid";
                if (currentObject.position.x !== posX || currentObject.position.y !== posY || currentObject.position.z !== posZ) {
                    currentObject.position.set(posX, posY, posZ);
                }
                removeRotateSliders();
                removeColorSliders();
                break;
            default:
                debug.innerHTML = "no tool selected"
        }

        debug.innerHTML += "Current edit tool: " + currentEditTool

    } else {
        removeRotateSliders();
        removeColorSliders();
        removePosSliders();
        
    }
}

export { updateScene }


