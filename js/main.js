const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const light = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
scene.add( light );

/*
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/

camera.position.z = 5;

const loader = new THREE.GLTFLoader();
loader.load("../models/scene.gltf", function(gltf){
    scene.add(gltf.scene);
    gltf.scene.scale.set(.4, .4, .4);
});

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();

window.addEventListener('resize', onWindowResize, false);

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    render.setSize( window.innerWidth, window.innerHeight)
}