export default function createObjectInstance(){
    const group = new THREE.Group();    
    let mesh = engine.addBox(color, scale)
    mesh.position.set(0, (scale[1]/2), 0);
    group.add(mesh);
    return group;
};