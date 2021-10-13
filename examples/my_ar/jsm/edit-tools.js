function editTools(currentEditTool) {
    
    const scaleButton = document.getElementById('scale-button');
    const rotateButton = document.getElementById('rotate-button');
    const colorButton = document.getElementById('color-button');
    const moveButton = document.getElementById('move-button');


    const scaleObject = () => {
        currentEditTool = "scale";
    }

    const rotateObject = () => {
        currentEditTool = "rotate";
    }          


    const colorObject = () => {
        currentEditTool = "color";
    }

    const moveObject = () => {
        currentEditTool = "move";
    }


    scaleButton.addEventListener("click", scaleObject)
    rotateButton.addEventListener("click", rotateObject)
    colorButton.addEventListener("click", colorObject)
    moveButton.addEventListener("click", moveObject)

    
}

export { editTools };