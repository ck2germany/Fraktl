import * as THREE from 'three';

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );



let gBox = new THREE.BoxGeometry(4,4,4);
let material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
var cube = new THREE.Mesh( gBox, material );
scene.add( cube );

camera.position.z = 75;

let cylGeo = new THREE.CylinderGeometry( 5, 5, 20, 32);
var cylinder = new THREE.Mesh (cylGeo, material);
scene.add( cylinder );


function animate() {
	requestAnimationFrame( animate );
  cylinder.rotation.x += 0.07;
  cylinder.rotation.y += 0.05;
  cylinder.rotation.z += 0.05;
	renderer.render( scene, camera );
}
animate();
renderer.render( scene, camera);
