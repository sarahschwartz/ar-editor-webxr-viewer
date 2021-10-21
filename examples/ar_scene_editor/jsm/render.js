function updateScene(currentObject,
    currentEditTool,
    editToolbar,
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
                if (currentObject.scale.x !== scaleX) {
                    currentObject.scale.x = scaleX;
                }
                if (currentObject.scale.y !== scaleY) {
                    currentObject.scale.y = scaleY;
                }
                if (currentObject.scale.z !== scaleZ) {
                    currentObject.scale.z = scaleZ;
                }
                break;
            case "rotate":
                currentObject.rotation.x = rotateX/360 * 2 * Math.PI;
                currentObject.rotation.y = rotateY/360 * 2 * Math.PI;
                currentObject.rotation.z = rotateZ/360 * 2 * Math.PI;

                // keep spinning option somewhere?
                // currentObject.rotation.y = currentObject.rotation.y + 0.01;

                break;
            case "color":
                if (currentObject.material.color !== color) {
                    currentObject.material.color = color;
                }
                break;
            case "move":
                if (currentObject.position.x !== posX || currentObject.position.y !== posY || currentObject.position.z !== posZ) {
                    currentObject.position.set(posX, posY, posZ);
                }
                break;
            default:
        }
 

    }
}

export { updateScene }


