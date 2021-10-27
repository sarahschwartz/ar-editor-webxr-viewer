function addScaleSliderOutput(scaleXSlider,
    scaleYSlider,
    scaleZSlider,
    scaleXOutput,
    scaleYOutput,
    scaleZOutput) {
    
    scaleXSlider.oninput = function() {
        let xVal = this.value * 10
        scaleXOutput.innerHTML = `X: ${xVal}cm`;
    }
    scaleYSlider.oninput = function() {
        let yVal = this.value * 10
        scaleYOutput.innerHTML = `Y: ${yVal}cm`;
    }
    scaleZSlider.oninput = function() {
        let zVal = this.value * 10
        scaleZOutput.innerHTML = `Z: ${zVal}cm`;
    } 
  
}


function addRotateSliderOutput(rotateXSlider,
    rotateYSlider,
    rotateZSlider,
    rotateXOutput,
    rotateYOutput,
    rotateZOutput) {
    
    rotateXSlider.oninput = function() {
        rotateXOutput.innerHTML = `X: ${this.value}°`;
    }
    rotateYSlider.oninput = function() {
        rotateYOutput.innerHTML = `Y: ${this.value}°`;
    }
    rotateZSlider.oninput = function() {
        rotateZOutput.innerHTML = `Z: ${this.value}°`;
    }   
  
}


function addColorSliderOutput(redSlider,
    greenSlider,
    blueSlider,
    redOutput,
    greenOutput,
    blueOutput) {
    
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


function addPosSliderOutput(posXSlider,
    posYSlider,
    posZSlider,
    posXOutput,
    posYOutput,
    posZOutput) {
    
    posXSlider.oninput = function() {
        let xVal = parseInt(this.value * 100);
        posXOutput.innerHTML = `X: ${xVal}cm`;
    }
    posYSlider.oninput = function () {
        let yVal = parseInt(this.value * 100);
        posYOutput.innerHTML = `Y: ${yVal}cm`;
    }
    posZSlider.oninput = function () {
        let zVal = parseInt(this.value * 100);
        posZOutput.innerHTML = `Z: ${zVal}cm`;
    }
}

export { addScaleSliderOutput, addRotateSliderOutput, addColorSliderOutput, addPosSliderOutput };