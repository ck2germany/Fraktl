import * as THREE from 'three';
//create scene to add everything into

const WIDTH = 400;
const HEIGHT = 300;
const scene = new THREE.Scene();

// create camera, which provides logic of what to show
// camera takes 4 args: fov, aspect, near, far
const VIEW_ANGLE = 50;
const ASPECT = HEIGHT/WIDTH;
const NEAR = 0.1;
const FAR = 2000;

const camera = new THREE.PerspectiveCamera(
  VIEW_ANGLE,
  ASPECT,
  NEAR,
  FAR
);

// camera.position.z = 300;

// create renderer, another part of this
const renderer = new THREE.WebGLRenderer();
renderer.setSize (WIDTH, HEIGHT);
// renderer.setClearColor( new THREE.Color(0,1));

//the renderer is what provides the dom element to put into the html
const container = document.getElementById("container");



//create object
var geometry = new THREE.RingGeometry( 1, 5, 32 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );




//put it all together with the renderer
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
