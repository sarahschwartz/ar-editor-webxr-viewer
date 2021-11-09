import { GLTFLoader } from '../libs/new-three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '../libs/new-three/examples/jsm/controls/OrbitControls.js'

let camera, scene, renderer
let cameraControls

init();
animate();

function init() {

    const container = document.getElementById( 'container' );

    //////////////////// ***  RENDERER  *** ////////////////////
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    //////////////////// ***  SCENE  *** ////////////////////
    scene = new THREE.Scene();

    //////////////////// ***  CAMERA  *** ////////////////////
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );

    cameraControls = new OrbitControls( camera, renderer.domElement );
    cameraControls.update();

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    scene.add(directionalLight);
    
    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    const loader = new GLTFLoader().setPath('../assets/models/');
    loader.load('table_chair_set.glb', function (gltf) {
        let model = gltf.scene
        console.log(model)
        model.rotation.y = 0
        scene.add(model)

     })
    
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // const cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    camera.position.z = 5;
    



     //////////////////// ***  WINDOW RESIZE LISTENER  *** ////////////////////
    window.addEventListener( 'resize', onWindowResize );

}

 //////////////////// ***  WINDOW RESIZE FUNCTION  *** ////////////////////

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );


}

 //////////////////// ***  ANIMATE FUNCTION *** ////////////////////

function animate() {

    requestAnimationFrame( animate );

    renderer.render( scene, camera );

}



