function editTools(redSlider,
    greenSlider,
    blueSlider,
    posXSlider,
    posYSlider,
    posZSlider) {

    const redOutput = document.getElementById("red-slider-output");
    const greenOutput = document.getElementById("green-slider-output");
    const blueOutput = document.getElementById("blue-slider-output");

    const posXOutput = document.getElementById("posX-slider-output");
    const posYOutput = document.getElementById("posY-slider-output");
    const posZOutput = document.getElementById("posZ-slider-output");

    
    const addColorTools = () => {
        redOutput.innerHTML = "Red: " + redSlider.value;
        greenOutput.innerHTML = "Green: " + greenSlider.value;
        blueOutput.innerHTML = "Blue: " + blueSlider.value;
    
        redSlider.oninput = function() {
            redOutput.innerHTML = "Red: " + this.value;
        }
        greenSlider.oninput = function() {
            greenOutput.innerHTML = "Green: " + this.value;
        }
        blueSlider.oninput = function() {
            blueOutput.innerHTML = "Blue: " + this.value;
        }
        
    }

    const addMoveTools = () => {
        posXOutput.innerHTML = "X: " + posXSlider.value;
        posYOutput.innerHTML = "Y: " + posYSlider.value;
        posZOutput.innerHTML = "Z: " + posZSlider.value;
    
        posXSlider.oninput = function() {
            posXOutput.innerHTML = "X: " + this.value;
        }
        posYSlider.oninput = function() {
            posYOutput.innerHTML = "Y: " + this.value;
        }
        posZSlider.oninput = function() {
            posZOutput.innerHTML = "Z: " + this.value;
        }
    }

    addColorTools();
    addMoveTools();
    
}

export { editTools };