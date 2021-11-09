export default function updateState() {
    scaleX = scaleXSlider.value;
    scaleY = scaleYSlider.value;
    scaleZ = scaleZSlider.value;
    
    rotateX = rotateXSlider.value;
    rotateY = rotateYSlider.value;
    rotateZ = rotateZSlider.value;
    
    redVal = redSlider.value;
    greenVal = greenSlider.value;
    blueVal = blueSlider.value;
    color = new THREE.Color("rgb(" + redVal + "," + greenVal + "," + blueVal + ")");
    
    posX = posXSlider.value;
    posY = posYSlider.value;
    posZ = posZSlider.value;
    
    opacity = opacitySliderInput.value
    transmission = transmissionSliderInput.value
    sheen = sheenSliderInput.value
    sheenRoughness = sheenRoughnessSliderInput.value
    sheenRedVal = sheenRedSlider.value
    sheenGreenVal = sheenGreenSlider.value
    sheenBlueVal = sheenBlueSlider.value
    sheenColor = new THREE.Color("rgb(" + sheenRedVal + "," + sheenGreenVal + "," + sheenBlueVal + ")");
    
    roughness = roughnessSliderInput.value
    metalness = metalnessSliderInput.value
    reflection = reflectionSliderInput.value
    clearcoat = clearcoatSliderInput.value
    clearcoatRoughness = clearcoatRoughnessSliderInput.value
    ior = iorSliderInput.value
    thickness = thicknessSliderInput.value
    emissiveIntensity = emissiveIntensitySliderInput.value
    
    ecRedVal = ecRedSlider.value;
    ecGreenVal = ecGreenSlider.value;
    ecBlueVal = ecBlueSlider.value;
    ecColor = new THREE.Color("rgb(" + ecRedVal + "," + ecGreenVal + "," + ecBlueVal + ")");
    
}    