export default function addGLTFModel(path, anchor, scale=[1,1,1]) {
    loader.load(path, function (gltf) {
        const group = new THREE.Group();   
        let model = gltf.scene.children[0]
        if (model.children.length > 0) {
            model.children.forEach(model => {
                model.scale.x = scale[0]
                model.scale.y = scale[1]
                model.scale.z = scale[2]
                group.add(model)
            })
            group.scale.x = model.scale.x
            group.scale.y = model.scale.y
            group.scale.z = model.scale.z
            group.children[0].name = modelName
        } else {
            model.scale.x = scale[0]
            model.scale.y = scale[1]
            model.scale.z = scale[2]
            model.name = modelName
            group.add(model)
        }

        objectsList.push(group)
        engine.addAnchoredNode(anchor, group);
        currentObjectIndex = engine._scene.children.length - 1;
        return group;
        
    } );
   
}