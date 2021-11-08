export default function addGLTFModel(path, anchor, scale=[1,1,1]) {
    loader.load(path, function (gltf) {
        let model = gltf.scene.children[0]
        model.scale.x = scale[0]
        model.scale.y = scale[1]
        model.scale.z = scale[2]

        model.name = modelName
        
        const group = new THREE.Group();    
        model.position.set(0, (scale[1]/2), 0);
        group.add(model);
        objectsList.push(group)
        engine.addAnchoredNode(anchor, group);
        currentObjectIndex = engine._scene.children.length - 1;
        return group;
        
    } );
   
}