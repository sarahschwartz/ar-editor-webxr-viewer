export default function getGeometry(object){
    let geometry;
    switch (object.geometry.type) {
        case "SphereBufferGeometry":
            geometry = "Sphere";
            break;
        case "BoxBufferGeometry":
            geometry = "Cube";
            break;
        case "CylinderGeometry":
            geometry = "Cylinder";
            break;
        case "PlaneGeometry":
            geometry = "Plane";
            break;
        default:
            geometry = "none"
    }

    return geometry;

}

