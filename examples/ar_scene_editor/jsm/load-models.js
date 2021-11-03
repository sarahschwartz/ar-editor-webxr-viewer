export default function addGLTFModel(path) {
    loader.load( path, function ( gltf ) {
        gltf.scene.position.set(...position)
        gltf.scene.scale.x = 0.2
        gltf.scene.scale.y = 0.2
        gltf.scene.scale.z = 0.2
        objectsList.push(gltf.scene)
        engine._scene.add(gltf.scene);
        engine.render()
    } );
   
}