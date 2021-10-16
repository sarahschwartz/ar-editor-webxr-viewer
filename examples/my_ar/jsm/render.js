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
                scaleSliders.style.display = "grid";
                currentObject.scale.x = scaleX;
                currentObject.scale.y = scaleY;
                currentObject.scale.z = scaleZ;
                removeSliders(rotateSliders);
                removeSliders(colorSliders);
                removeSliders(posSliders);
                break;
            case "rotate":
                rotateSliders.style.display = "grid";

                currentObject.rotation.x = rotateX/360 * 2 * Math.PI;
                currentObject.rotation.y = rotateY/360 * 2 * Math.PI;
                currentObject.rotation.Z = rotateZ/360 * 2 * Math.PI;

                // keep spinning option somewhere?
                // currentObject.rotation.y = currentObject.rotation.y + 0.01;

                removeSliders(scaleSliders);
                removeSliders(colorSliders);
                removeSliders(posSliders);
                break;
            case "color":
                if (currentObject.material.color !== color) {
                    currentObject.material.color = color;
                }
                colorSliders.style.display = "grid";
                removeSliders(scaleSliders);
                removeSliders(rotateSliders);
                removeSliders(posSliders);
                break;
            case "move":
                posSliders.style.display = "grid";
                if (currentObject.position.x !== posX || currentObject.position.y !== posY || currentObject.position.z !== posZ) {
                    currentObject.position.set(posX, posY, posZ);
                }
                removeSliders(scaleSliders);
                removeSliders(rotateSliders);
                removeSliders(colorSliders);
                break;
            default:
        }


    } else {
        removeSliders(scaleSliders);
        removeSliders(rotateSliders);
        removeSliders(colorSliders);
        removeSliders(posSliders);
        
    }
}

export { updateScene }


