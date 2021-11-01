export default function getGeometry(object){
    let geometry;
    switch (object.geometry.type) {
        case "SphereGeometry":
            geometry = "Sphere";
            break;
        case "BoxGeometry":
            geometry = "Cube";
            break;
        case "CylinderGeometry":
            geometry = "Cylinder";
            break;
        case "PlaneGeometry":
            geometry = "Plane";
            break;
        case "ConeGeometry":
            geometry = "Cone";
            break;
        case "TorusGeometry":
            geometry = "Torus";
            break;
        case "RingGeometry":
            geometry = "Ring";
            break;
        case "TetrahedronGeometry":
            geometry = "Pyramid";
            break;
        case "OctahedronGeometry":
            geometry = "Octahedron";
            break;
        case "IcosahedronGeometry":
            geometry = "Icosahedron";
            break;
        case "DodecahedronGeometry":
            geometry = "Dodecahedron";
            break;
        default:
            geometry = object.geometry.type
    }

    return geometry;

}

