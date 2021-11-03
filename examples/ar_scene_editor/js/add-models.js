import { GLTFLoader } from '../libs/new-three/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader().setPath( '../assets/models/' );

export default function addGLTFModel(path) {
    loader.load( path, function ( gltf ) {
        engine.addGLTFModel(gltf, position)
    } );
   
}

// export default function addSusan() {
//     // addGLTFModel('susan.glb')
//     // debug.innerHTML = "hi"
// }
