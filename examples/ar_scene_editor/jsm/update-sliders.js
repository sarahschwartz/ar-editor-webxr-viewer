export default function updateSliders() {

    
    if (currentObject.material.type === "MeshPhysicalMaterial") {
    
        let units = "cm";
        // Scale
        scaleXSlider.value = currentObject.scale.x
        scaleYSlider.value = currentObject.scale.y
        scaleZSlider.value = currentObject.scale.z
        let scaleXVal = scaleXSlider.value * 10
        let scaleYVal = scaleYSlider.value * 10
        let scaleZVal = scaleZSlider.value * 10
        if (Math.abs(scaleXVal) > 99) {
            scaleXVal = scaleXVal / 100;
            units = "m";
        }
        scaleXOutput.innerHTML = `X: ${scaleXVal}${units}`;

        if (Math.abs(scaleYVal) > 99) {
            scaleYVal = scaleYVal / 100;
            units = "m";
        } else {
            units = "cm";
        }
        scaleYOutput.innerHTML = `Y: ${scaleYVal}${units}`;

        if (Math.abs(scaleZVal) > 99) {
            scaleZVal = scaleZVal / 100;
            units = "m";
        } else {
            units = "cm";
        }
        scaleZOutput.innerHTML = `Z: ${scaleZVal}${units}`;
        // Rotation
        rotateXSlider.value = currentObject.rotation.x * 180 / Math.PI;
        rotateYSlider.value = currentObject.rotation.y * 180 / Math.PI;
        rotateZSlider.value = currentObject.rotation.z * 180 / Math.PI;
        rotateXOutput.innerHTML = `X: ${rotateXSlider.value}°`;
        rotateYOutput.innerHTML = `Y: ${rotateYSlider.value}°`;
        rotateZOutput.innerHTML = `Z: ${rotateZSlider.value}°`;
        // Color
        redSlider.value = currentObject.material.color.r * 255
        greenSlider.value = currentObject.material.color.g * 255
        blueSlider.value = currentObject.material.color.b * 255
        redOutput.innerHTML = "Red: " + redSlider.value;
        greenOutput.innerHTML = "Green: " + greenSlider.value;
        blueOutput.innerHTML = "Blue: " + blueSlider.value;
        //Position
        posXSlider.value = currentObject.position.x
        posYSlider.value = currentObject.position.y
        posZSlider.value = currentObject.position.z
        let posXVal = parseInt(posXSlider.value * 100);
        let posYVal = parseInt(posYSlider.value * 100);
        let posZVal = parseInt(posZSlider.value * 100);

        if (Math.abs(posXVal) > 99) { 
            posXVal = posXVal / 100;
            units = "m"
        } else {
            units = "cm"
        }
        posXOutput.innerHTML = `X: ${posXVal}${units}`

        if (Math.abs(posYVal) > 99) {
            posYVal = posYVal / 100;
            units = "m"
        } else {
            units = "cm"
        }
        posYOutput.innerHTML = `Y: ${posYVal}${units}`

        if (Math.abs(posZVal) > 99) {
            posZVal = posZVal / 100;
            units = "m"
        } else {
            units = "cm"
        }
        posZOutput.innerHTML = `Z: ${posZVal}${units}`
        //Opacity
        opacitySliderInput.value = currentObject.material.opacity;
        opacitySliderOutput.innerHTML = `${opacitySliderInput.value}`;
        
        // Transmission
        transmissionSliderInput.value = currentObject.material.transmission;
        transmissionSliderOutput.innerHTML = `${transmissionSliderInput.value}`;
    
        // Sheen
        sheenSliderInput.value = currentObject.material.sheen;
        sheenSliderOutput.innerHTML = `${sheenSliderInput.value}`;
    
        //Sheen Roughness
        sheenRoughnessSliderInput.value = currentObject.material.sheenRoughness;
        sheenRoughnessSliderOutput.innerHTML = `${sheenRoughnessSliderInput.value}`;
    
        // Sheen Colors
        sheenRedSlider.value = currentObject.material.sheenColor.r * 255;
        sheenGreenSlider.value = currentObject.material.sheenColor.g * 255;
        sheenBlueSlider.value = currentObject.material.sheenColor.b * 255;
        sheenRedOutput.innerHTML = "Red: " + sheenRedSlider.value;
        sheenGreenOutput.innerHTML = "Green: " + sheenGreenSlider.value;
        sheenBlueOutput.innerHTML = "Blue: " + sheenBlueSlider.value;
    
        //Roughness
        roughnessSliderInput.value = currentObject.material.roughness;
        roughnessSliderOutput.innerHTML = `${roughnessSliderInput.value}`;
    
        //Metalness
        metalnessSliderInput.value = currentObject.material.metalness;
        metalnessSliderOutput.innerHTML = `${metalnessSliderInput.value}`;
    
        // Reflection
        reflectionSliderInput.value = currentObject.material.reflectivity;
        reflectionSliderOutput.innerHTML = `${reflectionSliderInput.value}`;
    
        // Clearcoat
        clearcoatSliderInput.value = currentObject.material.clearcoat;
        clearcoatSliderOutput.innerHTML = `${clearcoatSliderInput.value}`;
    
        // Clearcoat Roughness
        clearcoatRoughnessSliderInput.value = currentObject.material.clearcoatRoughness;
        clearcoatRoughnessSliderOutput.innerHTML = `${clearcoatRoughnessSliderInput.value}`;
    
        // Thickness
        thicknessSliderInput.value = currentObject.material.thickness;
        thicknessSliderOutput.innerHTML = `${thicknessSliderInput.value}`;
    
        // Wireframe Thickness
        wireframeThicknessSliderInput.value = currentObject.material.wireframeThickness;
        wireframeThicknessSliderOutput.innerHTML = `${wireframeThicknessSliderInput.value}`;
    
        // Emissive Intensity
        emissiveIntensitySliderInput.value = currentObject.material.emissiveIntensity ;
        emissiveIntensitySliderOutput.innerHTML = `${emissiveIntensitySliderInput.value}`;
    
        // Emissive Colors
        ecRedSlider.value = currentObject.material.emissive.r * 255
        ecGreenSlider.value = currentObject.material.emissive.g * 255
        ecBlueSlider.value = currentObject.material.emissive.b * 255
        ecRedOutput.innerHTML = "Red: " + ecRedSlider.value;
        ecGreenOutput.innerHTML = "Green: " + ecGreenSlider.value;
        ecBlueOutput.innerHTML = "Blue: " + ecBlueSlider.value;
    } else {
        debug.innerHTML =+ "not a physical mat"
    }

}