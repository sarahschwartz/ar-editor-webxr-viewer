const editToolsOutput = {
    scaleSlider: function(scaleXSlider,
        scaleYSlider,
        scaleZSlider,
        scaleXOutput,
        scaleYOutput,
        scaleZOutput) {
        
        scaleXSlider.oninput = function () {
            let xVal = parseInt(this.value * 10);
            // let units = "cm";
            // if (xVal > 99) {
            //     xVal = xVal / 100;
            //     units = "m"
            // }
            scaleXOutput.innerHTML = `X: ${xVal}%`;
        }
        scaleYSlider.oninput = function () {
            let yVal = parseInt(this.value * 10);
            // let units = "cm";
            // if (yVal > 99) {
            //     yVal = yVal / 100;
            //     units = "m"
            // }
            scaleYOutput.innerHTML = `Y: ${yVal}%`;
        }
        scaleZSlider.oninput = function () {
            let zVal = parseInt(this.value * 10);
            // let units = "cm";
            // if (zVal > 99) {
            //     zVal = zVal / 100;
            //     units = "m"
            // }
            scaleZOutput.innerHTML = `Z: ${zVal}%`;
        }
    },
    rotateSlider: function(rotateXSlider,
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
      
    },
    colorSlider: function(redSlider,
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
    },
    posSlider: function(posXSlider,
        posYSlider,
        posZSlider,
        posXOutput,
        posYOutput,
        posZOutput) {
        
        posXSlider.oninput = function() {
            let xVal = parseInt(this.value * 100);
            let units = "cm"
            if (Math.abs(xVal) > 99) {
                xVal = xVal / 100;
                units = "m"
            }
            posXOutput.innerHTML = `X: ${xVal}${units}`;
        }
        posYSlider.oninput = function () {
            let yVal = parseInt(this.value * 100);
            let units = "cm"
            if (Math.abs(yVal) > 99) {
                yVal = yVal / 100;
                units = "m"
            }
            posYOutput.innerHTML = `Y: ${yVal}${units}`;
        }
        posZSlider.oninput = function () {
            let zVal = parseInt(this.value * 100);
            let units = "cm"
            if (Math.abs(zVal) > 99) {
                zVal = zVal / 100;
                units = "m"
            }
            posZOutput.innerHTML = `Z: ${zVal}${units}`;
        }
    },
    singleSlider: function(slider, output) {
        
        slider.oninput = function() {
            output.innerHTML = `${parseInt(this.value * 100)}%`;
        }
    },
    
}
    
editToolsOutput.scaleSlider(scaleXSlider,
    scaleYSlider,
    scaleZSlider,
    scaleXOutput,
    scaleYOutput,
    scaleZOutput);

    editToolsOutput.rotateSlider(rotateXSlider,
        rotateYSlider,
        rotateZSlider,
        rotateXOutput,
        rotateYOutput,
        rotateZOutput);
    
    editToolsOutput.colorSlider(redSlider,
        greenSlider,
        blueSlider,
        redOutput,
        greenOutput,
        blueOutput);
        
    editToolsOutput.posSlider(posXSlider,
        posYSlider,
        posZSlider,
        posXOutput,
        posYOutput,
        posZOutput);


    editToolsOutput.singleSlider(opacitySliderInput, opacitySliderOutput);
    editToolsOutput.singleSlider(transmissionSliderInput, transmissionSliderOutput);
    editToolsOutput.singleSlider(sheenSliderInput, sheenSliderOutput);
    editToolsOutput.singleSlider(sheenRoughnessSliderInput, sheenRoughnessSliderOutput);
    editToolsOutput.singleSlider(roughnessSliderInput, roughnessSliderOutput);
    editToolsOutput.singleSlider(metalnessSliderInput, metalnessSliderOutput);
    editToolsOutput.singleSlider(reflectionSliderInput, reflectionSliderOutput);
    editToolsOutput.singleSlider(clearcoatSliderInput, clearcoatSliderOutput);
    editToolsOutput.singleSlider(clearcoatRoughnessSliderInput, clearcoatRoughnessSliderOutput);
    editToolsOutput.singleSlider(thicknessSliderInput, thicknessSliderOutput);
    editToolsOutput.singleSlider(emissiveIntensitySliderInput, emissiveIntensitySliderOutput);
    
    editToolsOutput.colorSlider(sheenRedSlider,
        sheenGreenSlider,
        sheenBlueSlider,
        sheenRedOutput,
        sheenGreenOutput,
        sheenBlueOutput);
    
    editToolsOutput.colorSlider(ecRedSlider,
        ecGreenSlider,
        ecBlueSlider,
        ecRedOutput,
        ecGreenOutput,
        ecBlueOutput);
