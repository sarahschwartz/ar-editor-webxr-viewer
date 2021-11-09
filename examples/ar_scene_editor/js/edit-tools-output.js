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
    singleSliderPercent: function(slider, output) {
        
        slider.oninput = function() {
            output.innerHTML = `${parseInt(this.value * 100)}%`
        }
    },
    singleSlider: function(slider, output) {
        
        slider.oninput = function() {
            output.innerHTML = this.value
        }
    }
    
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


    editToolsOutput.singleSliderPercent(transmissionSliderInput, transmissionSliderOutput);
    editToolsOutput.singleSliderPercent(sheenSliderInput, sheenSliderOutput);
    editToolsOutput.singleSliderPercent(sheenRoughnessSliderInput, sheenRoughnessSliderOutput);
    editToolsOutput.singleSliderPercent(roughnessSliderInput, roughnessSliderOutput);
    editToolsOutput.singleSliderPercent(metalnessSliderInput, metalnessSliderOutput);
    editToolsOutput.singleSliderPercent(reflectionSliderInput, reflectionSliderOutput);
    editToolsOutput.singleSliderPercent(clearcoatSliderInput, clearcoatSliderOutput);
    editToolsOutput.singleSliderPercent(clearcoatRoughnessSliderInput, clearcoatRoughnessSliderOutput);
    editToolsOutput.singleSliderPercent(emissiveIntensitySliderInput, emissiveIntensitySliderOutput);
    editToolsOutput.singleSlider(iorSliderInput, iorSliderOutput);
    editToolsOutput.singleSlider(thicknessSliderInput, thicknessSliderOutput);
    
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
