const removeSliders = (editTool) => {
    switch(editTool){
        case "scale":
            scaleSliders.style.display = "none";
            break;
        case "rotate":
            rotateSliders.style.display = "none";
            break;
        case "color":
            colorSliders.style.display = "none";
            break;
        case "move":
            posSliders.style.display = "none";
            break;
        case "opacity":
            opacitySlider.style.display = "none";
            break;
        case "transmission":
            transmissionSlider.style.display = "none";
            break;
        case "sheen":
            sheenSlider.style.display = "none";
            break;
        case "sheen-color":
            sheenColorSliders.style.display = "none";
            break;
        case "sheen-roughness":
            sheenRoughnessSlider.style.display = "none";
            break;
        case "roughness":
            roughnessSlider.style.display = "none";
            break;
        case "metalness":
            metalnessSlider.style.display = "none";
            break;
        case "reflection":
            reflectionSlider.style.display = "none";
            break;
        case "clearcoat":
            clearcoatSlider.style.display = "none";
            break;
        case "clearcoat-roughness":
            clearcoatRoughnessSlider.style.display = "none";
            break;
        case "thickness":
            thicknessSlider.style.display = "none";
            break;
        case "emissive-intensity":
            emissiveIntensitySlider.style.display = "none";
            break;
        case "emissive-color":
            emissiveColorSliders.style.display = "none";
            break;
        default:
    }
}