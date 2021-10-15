function updateScene(currentObject,
    currentEditTool,
    editToolbar,
    removeSliders,
    scaleSliders,
    rotateSliders,
    colorSliders,
    posSliders,
    scaleX,
    scaleY,
    scaleZ,
    rotateX,
    rotateY,
    rotateZ,
    color,
    posX,
    posY,
    posZ,
    debug) {
    

    // If Edit toolbar is active
    if (editToolbar.classList.contains("active-toolbar")) {
        switch (currentEditTool) {
            case "scale":
                debug.innerHTML = "Scale tool <br>";
                scaleSliders.style.display = "grid";
                currentObject.scale.x = scaleX;
                currentObject.scale.y = scaleY;
                currentObject.scale.z = scaleZ;
                removeSliders(rotateSliders);
                removeSliders(colorSliders);
                removeSliders(posSliders);
                break;
            case "rotate":
                debug.innerHTML = "Rotate tool <br>";
                rotateSliders.style.display = "grid";

                currentObject.rotation.x = rotateX;
                currentObject.rotation.y = rotateY;
                currentObject.rotation.Z = rotateZ;

                // keep spinning option somewhere?
                // currentObject.rotation.y = currentObject.rotation.y + 0.01;

                removeSliders(scaleSliders);
                removeSliders(colorSliders);
                removeSliders(posSliders);
                break;
            case "color":
                debug.innerHTML = "Color tool <br>";
                if (currentObject.material.color !== color) {
                    currentObject.material.color = color;
                }
                colorSliders.style.display = "grid";
                removeSliders(scaleSliders);
                removeSliders(rotateSliders);
                removeSliders(posSliders);
                break;
            case "move":
                debug.innerHTML = "Move tool <br>";
                posSliders.style.display = "grid";
                if (currentObject.position.x !== posX || currentObject.position.y !== posY || currentObject.position.z !== posZ) {
                    currentObject.position.set(posX, posY, posZ);
                }
                removeSliders(scaleSliders);
                removeSliders(rotateSliders);
                removeSliders(colorSliders);
                break;
            default:
                debug.innerHTML = "no tool selected"
        }

        debug.innerHTML += "Current edit tool: " + currentEditTool

    } else {
        removeSliders(scaleSliders);
        removeSliders(rotateSliders);
        removeSliders(colorSliders);
        removeSliders(posSliders);
        
    }
}

export { updateScene }


