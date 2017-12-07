import * as THREE from 'three';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    2,
    100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize (window.innerWidth/2, window.innerHeight/2);
document.body.appendChild( renderer.domElement);

// var geometry = new THREE.BoxGeometry(1,1,1);
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add(cube);

var planeGeo = new THREE.PlaneBufferGeometry();
var plMaterial = new THREE.MeshBasicMaterial();
var plane = new THREE.Mesh( planeGeo, plMaterial );
scene.add( plane );




var starsGeometry = new THREE.Geometry();

for ( var i = 0; i < 10000; i ++ ) {

	var star = new THREE.Vector3();
	star.x = THREE.Math.randFloatSpread( 2000 );
	star.y = THREE.Math.randFloatSpread( 2000 );
	star.z = THREE.Math.randFloatSpread( 2000 );

	starsGeometry.vertices.push( star );

}

var starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } );

var starField = new THREE.Points( starsGeometry, starsMaterial );

scene.add( starField );

// var animate = function () {
//   	requestAnimationFrame( animate );
//
//   	cube.rotation.x += 0.1;
//   	cube.rotation.y += 0.1;
//
//   	renderer.render(scene, camera);
// };
//
// animate();

renderer.render(scene, camera);





// document.addEventListener("DOMContentLoaded", () => {
//   const mycanvas = document.getElementById("it");
//   //instead of a 2d context, we choose webgl here
//   if (!mycanvas) {
//     console.log("no element");
//   }
//   const context = mycanvas.getContext("webgl");
//
//   //alert for users who aren't supported
//   if (!context) {
//     alert("Unable to initialize WebGL, most commonly a browser upgrade is needed");
//   }
//   mycanvas.width = 300;
//   mycanvas.height = 300;
//   //draw a black box just to see
//   context.clearColor(0.0, 0.0, 0.0, 1.0);
//   context.clear(context.COLOR_BUFFER_BIT);
//
// });
