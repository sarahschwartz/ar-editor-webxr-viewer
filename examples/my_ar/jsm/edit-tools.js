function editTools() {
    
    const redSlider = document.getElementById("red-slider-input");
    const greenSlider = document.getElementById("green-slider-input");
    const blueSlider = document.getElementById("blue-slider-input");

    const redOutput = document.getElementById("red-slider-output");
    const greenOutput = document.getElementById("green-slider-output");
    const blueOutput = document.getElementById("blue-slider-output");

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

export { editTools };