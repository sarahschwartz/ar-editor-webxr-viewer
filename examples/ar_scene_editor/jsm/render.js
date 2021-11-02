function updateScene(currentObject,
    currentEditTool, 
    editToolbar,
    scaleX,
    scaleY,
    scaleZ,
    rotateX,
    rotateY,
    rotateZ,
    color,
    posX,
    posY,
    posZ,
    opacity,
    transmission,
    sheen,
    sheenColor,
    sheenRoughness,
    roughness,
    metalness,
    reflection,
    clearcoat,
    clearcoatRoughness,
    thickness,
    emissiveIntensity,
    ecColor,
    wireframeThickness
) {
    

    // If Edit toolbar is active
    if (editToolbar.classList.contains("active-toolbar")) {
        switch (currentEditTool) {
            case "scale":
                if (currentObject.scale.x !== scaleX) {
                    currentObject.scale.x = scaleX;
                }
                if (currentObject.scale.y !== scaleY) {
                    currentObject.scale.y = scaleY;
                }
                if (currentObject.scale.z !== scaleZ) {
                    currentObject.scale.z = scaleZ;
                }
                break;
            case "rotate":
                currentObject.rotation.x = rotateX/360 * 2 * Math.PI;
                currentObject.rotation.y = rotateY/360 * 2 * Math.PI;
                currentObject.rotation.z = rotateZ/360 * 2 * Math.PI;

                // keep spinning option somewhere?
                // currentObject.rotation.y = currentObject.rotation.y + 0.01;

                break;
            case "color":
                if (currentObject.material.color !== color) {
                    currentObject.material.color = color;
                }
                break;
            case "move":
                if (currentObject.position.x !== posX || currentObject.position.y !== posY || currentObject.position.z !== posZ) {
                    currentObject.position.set(posX, posY, posZ);
                }
                break;
            case "opacity":
                if (opacity < 1 && !currentObject.transparent) {
                    currentObject.transparent = true
                }
                if (currentObject.material.opacity !== opacity) {
                    currentObject.material.opacity = opacity;
                }
                break;
            case "transmission":
                if (currentObject.material.transmission !== transmission) {
                    currentObject.material.transmission = transmission;
                }
                break;
            case "sheen":
                if (currentObject.material.sheen !== sheen) {
                    currentObject.material.sheen = sheen;
                }
                break;
            case "sheen-roughness":
                if (currentObject.material.sheenRoughness !== sheenRoughness) {
                    currentObject.material.sheenRoughness = sheenRoughness;
                }
                break;
            case "sheen-color":
                if (currentObject.material.sheenColor !== sheenColor) {
                    currentObject.material.sheenColor = sheenColor;
                }
                break;
            case "roughness":
                if (currentObject.material.roughness !== roughness) {
                    currentObject.material.roughness = roughness;
                }
                break;
            case "metalness":
                if (currentObject.material.metalness !== metalness) {
                    currentObject.material.metalness = metalness;
                }
                break;
            case "reflection":
                if (currentObject.material.reflectivity !== reflection) {
                    currentObject.material.reflectivity = reflection;
                }
                break;
            case "clearcoat":
                if (currentObject.material.clearcoat !== clearcoat) {
                    currentObject.material.clearcoat = clearcoat;
                }
                break;
            case "clearcoat-roughness":
                if (currentObject.material.clearcoatRoughness !== clearcoatRoughness) {
                    currentObject.material.clearcoatRoughness = clearcoatRoughness;
                }
                break;
            case "thickness":
                if (currentObject.material.thickness !== thickness) {
                    currentObject.material.thickness = thickness;
                }
                break;
            case "wireframe-thickness":
                if (currentObject.material.wireframeThickness !== wireframeThickness) {
                    currentObject.material.wireframeThickness = wireframeThickness;
                }
                break;
            case "emissive-color":
                if (currentObject.material.emissive !== ecColor) {
                    currentObject.material.emissive = ecColor;
                }
                break;
            case "emissive-intensity":
                if (currentObject.material.emissiveIntensity !== emissiveIntensity) {
                    currentObject.material.emissiveIntensity = emissiveIntensity;
                }
                break;
            default:
        }
 

    }
}

export { updateScene }


