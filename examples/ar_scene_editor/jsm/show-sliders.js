export default function showSliders() {
    switch (currentEditTool) {
        case "scale":
            scaleSliders.style.display = "grid";
            break;
        case "rotate":
            rotateSliders.style.display = "grid";
            break;
        case "color":
            colorSliders.style.display = "grid";
            break;
        case "move":
            posSliders.style.display = "grid";
            break;
        case "opacity":
            opacitySlider.style.display = "grid";
            break;
        case "transmission":
            transmissionSlider.style.display = "grid";
            break;
        case "sheen":
            sheenSlider.style.display = "grid";
            break;
        case "sheen-roughness":
            sheenRoughnessSlider.style.display = "grid";
            break;
        case "sheen-color":
            sheenColorSliders.style.display = "grid";
            break;
        case "roughness":
            roughnessSlider.style.display = "grid";
            break;
        case "metalness":
            metalnessSlider.style.display = "grid";
            break;
        case "reflection":
            reflectionSlider.style.display = "grid";
            break;
        case "clearcoat":
            clearcoatSlider.style.display = "grid";
            break;
        case "clearcoat-roughness":
            clearcoatRoughnessSlider.style.display = "grid";
            break;
        case "thickness":
            thicknessSlider.style.display = "grid";
            break;
        case "emissive-intensity":
            emissiveIntensitySlider.style.display = "grid";
            break;
        case "emissive-color":
            emissiveColorSliders.style.display = "grid";
            break;
        default:
    }
}