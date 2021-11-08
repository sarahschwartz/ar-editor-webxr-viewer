export default function updateScene() {
    let objects = currentObject.children

    // If Edit toolbar is active
    if (editToolbar.classList.contains("active-toolbar")) {
        objects.forEach(object => {
            switch (currentEditTool) {
                case "scale":
                    if (object.scale.x !== scaleX) {
                        object.scale.x = scaleX;
                    }
                    if (object.scale.y !== scaleY) {
                        object.scale.y = scaleY;
                    }
                    if (object.scale.z !== scaleZ) {
                        object.scale.z = scaleZ;
                    }
                    break;
                case "rotate":
                    object.rotation.x = rotateX/360 * 2 * Math.PI;
                    object.rotation.y = rotateY/360 * 2 * Math.PI;
                    object.rotation.z = rotateZ/360 * 2 * Math.PI;
    
                    // keep spinning option somewhere?
                    // object.rotation.y = object.rotation.y + 0.01;
    
                    break;
                case "color":
                    if (object.material.color !== color) {
                        object.material.color = color;
                    }
                    break;
                case "move":
                    if (object.position.x !== posX || object.position.y !== posY || object.position.z !== posZ) {
                        object.position.set(posX, posY, posZ);
                    }
                    break;
                case "opacity":
                    if (opacity < 1 && !object.transparent) {
                        object.transparent = true
                    }
                    if (object.material.opacity !== opacity) {
                        object.material.opacity = opacity;
                    }
                    break;
                case "transmission":
                    if (object.material.transmission !== transmission) {
                        object.material.transmission = transmission;
                    }
                    break;
                case "sheen":
                    if (object.material.sheen !== sheen) {
                        object.material.sheen = sheen;
                    }
                    break;
                case "sheen-roughness":
                    if (object.material.sheenRoughness !== sheenRoughness) {
                        object.material.sheenRoughness = sheenRoughness;
                    }
                    break;
                case "sheen-color":
                    if (object.material.sheenColor !== sheenColor) {
                        object.material.sheenColor = sheenColor;
                    }
                    break;
                case "roughness":
                    if (object.material.roughness !== roughness) {
                        object.material.roughness = roughness;
                    }
                    break;
                case "metalness":
                    if (object.material.metalness !== metalness) {
                        object.material.metalness = metalness;
                    }
                    break;
                case "reflection":
                    if (object.material.reflectivity !== reflection) {
                        object.material.reflectivity = reflection;
                    }
                    break;
                case "clearcoat":
                    if (object.material.clearcoat !== clearcoat) {
                        object.material.clearcoat = clearcoat;
                    }
                    break;
                case "clearcoat-roughness":
                    if (object.material.clearcoatRoughness !== clearcoatRoughness) {
                        object.material.clearcoatRoughness = clearcoatRoughness;
                    }
                    break;
                case "thickness":
                    if (object.material.thickness !== thickness) {
                        object.material.thickness = thickness;
                    }
                    break;
                case "emissive-color":
                    if (object.material.emissive !== ecColor) {
                        object.material.emissive = ecColor;
                    }
                    break;
                case "emissive-intensity":
                    if (object.material.emissiveIntensity !== emissiveIntensity) {
                        object.material.emissiveIntensity = emissiveIntensity;
                    }
                    break;
                default:
            }

        })
        
 

    }
}



