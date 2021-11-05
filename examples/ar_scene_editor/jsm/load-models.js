export default function addGLTFModel(path, scale=[1,1,1]) {
    loader.load( path, function ( gltf ) {
        gltf.scene.position.set(...position)
        gltf.scene.scale.x = scale[0]
        gltf.scene.scale.y = scale[1]
        gltf.scene.scale.z = scale[2]
        objectsList.push(gltf.scene)
        engine._scene.add(gltf.scene);
        currentObjectIndex = engine._scene.children.length - 1;
        engine.render()
    } );
   
}