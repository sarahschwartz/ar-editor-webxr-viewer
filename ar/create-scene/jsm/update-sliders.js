export default function updateSliders() {

    let object = currentObject

    if (currentObject.type === "Group") {
        object = currentObject.children[0]
    }
    
    let units = "cm";
    // Scale
    scaleXSlider.value = object.scale.x
    scaleYSlider.value = object.scale.y
    scaleZSlider.value = object.scale.z
    let scaleXVal = scaleXSlider.value * 10
    let scaleYVal = scaleYSlider.value * 10
    let scaleZVal = scaleZSlider.value * 10

    // if (Math.abs(scaleXVal) > 99) {
    //     scaleXVal = scaleXVal / 100;
    //     units = "m";
    // }
    // scaleXOutput.innerHTML = `X: ${scaleXVal}${units}`;
    scaleXOutput.innerHTML = `X: ${scaleXVal}%`;

    // if (Math.abs(scaleYVal) > 99) {
    //     scaleYVal = scaleYVal / 100;
    //     units = "m";
    // } else {
    //     units = "cm";
    // }
    // scaleYOutput.innerHTML = `Y: ${scaleYVal}${units}`;
    scaleYOutput.innerHTML = `Y: ${scaleYVal}%`;

    // if (Math.abs(scaleZVal) > 99) {
    //     scaleZVal = scaleZVal / 100;
    //     units = "m";
    // } else {
    //     units = "cm";
    // }
    // scaleZOutput.innerHTML = `Z: ${scaleZVal}${units}`;
    scaleZOutput.innerHTML = `Z: ${scaleZVal}%`;

    // Rotation
    rotateXSlider.value = object.rotation.x * 180 / Math.PI;
    rotateYSlider.value = object.rotation.y * 180 / Math.PI;
    rotateZSlider.value = object.rotation.z * 180 / Math.PI;
    rotateXOutput.innerHTML = `X: ${rotateXSlider.value}°`;
    rotateYOutput.innerHTML = `Y: ${rotateYSlider.value}°`;
    rotateZOutput.innerHTML = `Z: ${rotateZSlider.value}°`;

    //Position
    posXSlider.value = object.position.x
    posYSlider.value = object.position.y
    posZSlider.value = object.position.z
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

    if (object.material.color) {
        // Color
        redSlider.value = object.material?.color.r * 255
        greenSlider.value = object.material?.color?.g * 255
        blueSlider.value = object.material?.color.b * 255
        redOutput.innerHTML = "Red: " + redSlider.value;
        greenOutput.innerHTML = "Green: " + greenSlider.value;
        blueOutput.innerHTML = "Blue: " + blueSlider.value;
        
    }
    if (object.material.transmission) {
        // Transmission
        transmissionSliderInput.value = object.material.transmission;
        transmissionSliderOutput.innerHTML = `${transmissionSliderInput.value * 100}%`;
    }
    if (object.material.sheen) {
        // Sheen
        sheenSliderInput.value = object.material.sheen;
        sheenSliderOutput.innerHTML = `${sheenSliderInput.value * 100}%`;
    }
    if (object.material.sheenRoughness) {
        //Sheen Roughness
        sheenRoughnessSliderInput.value = object.material.sheenRoughness;
        sheenRoughnessSliderOutput.innerHTML = `${sheenRoughnessSliderInput.value * 100}%`;
    }
    if (object.material.sheenColor) {
        // Sheen Colors
        sheenRedSlider.value = object.material.sheenColor.r * 255;
        sheenGreenSlider.value = object.material.sheenColor.g * 255;
        sheenBlueSlider.value = object.material.sheenColor.b * 255;
        sheenRedOutput.innerHTML = "Red: " + sheenRedSlider.value;
        sheenGreenOutput.innerHTML = "Green: " + sheenGreenSlider.value;
        sheenBlueOutput.innerHTML = "Blue: " + sheenBlueSlider.value;
    }
    if (object.material.roughness) {
        //Roughness
        roughnessSliderInput.value = object.material.roughness;
        roughnessSliderOutput.innerHTML = `${roughnessSliderInput.value * 100}%`;
    }
    if (object.material.metalness) {
        //Metalness
        metalnessSliderInput.value = object.material.metalness;
        metalnessSliderOutput.innerHTML = `${metalnessSliderInput.value * 100}%`;
    }
    if (object.material.reflectivity) {
        // Reflection
        reflectionSliderInput.value = object.material.reflectivity;
        reflectionSliderOutput.innerHTML = `${reflectionSliderInput.value * 100}%`;
    }
    if (object.material.clearcoat) {
        // Clearcoat
        clearcoatSliderInput.value = object.material.clearcoat;
        clearcoatSliderOutput.innerHTML = `${clearcoatSliderInput.value * 100}%`;
    }
    if (object.material.clearcoatRoughness) {
        // Clearcoat Roughness
        clearcoatRoughnessSliderInput.value = object.material.clearcoatRoughness;
        clearcoatRoughnessSliderOutput.innerHTML = `${clearcoatRoughnessSliderInput.value}`;
    }
    // if (object.material.thickness) {
    //     // Thickness
    //     thicknessSliderInput.value = object.material.thickness;
    //     thicknessSliderOutput.innerHTML = `${thicknessSliderInput.value}`;
    // }
    if (object.material.emissiveIntensity) {
        // Emissive Intensity
        emissiveIntensitySliderInput.value = object.material.emissiveIntensity ;
        emissiveIntensitySliderOutput.innerHTML = `${emissiveIntensitySliderInput.value * 100}%`;
    }
    if (object.material.emissive) {
        // Emissive Colors
        ecRedSlider.value = object.material.emissive.r * 255
        ecGreenSlider.value = object.material.emissive.g * 255
        ecBlueSlider.value = object.material.emissive.b * 255
        ecRedOutput.innerHTML = "Red: " + ecRedSlider.value;
        ecGreenOutput.innerHTML = "Green: " + ecGreenSlider.value;
        ecBlueOutput.innerHTML = "Blue: " + ecBlueSlider.value;

     }
}