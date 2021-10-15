function editTools(scaleXSlider,
    scaleYSlider,
    scaleZSlider,
    rotateXSlider,
    rotateYSlider,
    rotateZSlider,
    redSlider,
    greenSlider,
    blueSlider,
    posXSlider,
    posYSlider,
    posZSlider) {

    const scaleXOutput = document.getElementById("scaleX-slider-output");
    const scaleYOutput = document.getElementById("scaleY-slider-output");
    const scaleZOutput = document.getElementById("scaleZ-slider-output");

    const rotateXOutput = document.getElementById("rotateX-slider-output");
    const rotateYOutput = document.getElementById("rotateY-slider-output");
    const rotateZOutput = document.getElementById("rotateZ-slider-output");

    const redOutput = document.getElementById("red-slider-output");
    const greenOutput = document.getElementById("green-slider-output");
    const blueOutput = document.getElementById("blue-slider-output");

    const posXOutput = document.getElementById("posX-slider-output");
    const posYOutput = document.getElementById("posY-slider-output");
    const posZOutput = document.getElementById("posZ-slider-output");

    const addScaleTools = () => {
        scaleXOutput.innerHTML = "X: " + scaleXSlider.value;
        scaleYOutput.innerHTML = "Y: " + scaleYSlider.value;
        scaleZOutput.innerHTML = "Z: " + scaleZSlider.value;
    
        scaleXSlider.oninput = function() {
            scaleXOutput.innerHTML = "X: " + this.value;
        }
        scaleYSlider.oninput = function() {
            scaleYOutput.innerHTML = "Y: " + this.value;
        }
        scaleZSlider.oninput = function() {
            scaleZOutput.innerHTML = "Z: " + this.value;
        }
    }

    const addRotateTools = () => {
        rotateXOutput.innerHTML = "X: " + rotateXSlider.value;
        rotateYOutput.innerHTML = "Y: " + rotateYSlider.value;
        rotateZOutput.innerHTML = "Z: " + rotateZSlider.value;
    
        rotateXSlider.oninput = function() {
            rotateXOutput.innerHTML = "X: " + this.value;
        }
        rotateYSlider.oninput = function() {
            rotateYOutput.innerHTML = "Y: " + this.value;
        }
        rotateZSlider.oninput = function() {
            rotateZOutput.innerHTML = "Z: " + this.value;
        }
    }

    
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

    addRotateTools();
    addColorTools();
    addMoveTools();
    addScaleTools();
}

export { editTools };