function addFunction(color, scale) {
    switch (objectToPlace) {
        case "cube":
            return engine.addBox(color,scale)
            break;
        case "sphere":
            return engine.addSphere(color,scale)
            break;
        case "cylinder":
            return engine.addCylinder(color,scale)
            break;
        case "plane":
            return engine.addPlane(color,scale)
            break;
        case "cone":
            return engine.addCone(color,scale)
            break;
        case "torus":
            return engine.addTorus(color,scale)
            break;
        case "ring":
            return engine.addRing(color,scale)
            break;
        case "tetrahedron":
            return engine.addTetrahedron(color,scale)
            break;
        case "octahedron":
            return engine.addOctahedron(color,scale)
            break;
        case "icosahedron":
            return engine.addIcosahedron(color,scale)
            break;
        case "dodecahedron":
            return engine.addDodecahedron(color,scale)
            break;
        default:
            return engine.addBox(color,scale)
    }
} 

export default function createObjectInstance() {
    const group = new THREE.Group();    
    let mesh = addFunction(color, scale)
    mesh.position.set(0, (scale[1]/2), 0);
    group.add(mesh);
    return group;
};