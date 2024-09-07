// Import the necessary libraries
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create the bedroom walls
const wallGeometry = new THREE.BoxGeometry(10, 5, 0.1);
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
wall1.position.z = -5;
scene.add(wall1);

const wall2 = new THREE.Mesh(wallGeometry, wallMaterial);
wall2.position.z = 5;
scene.add(wall2);

const wall3 = new THREE.Mesh(wallGeometry, wallMaterial);
wall3.position.x = -5;
wall3.rotation.y = Math.PI / 2;
scene.add(wall3);

const wall4 = new THREE.Mesh(wallGeometry, wallMaterial);
wall4.position.x = 5;
wall4.rotation.y = Math.PI / 2;
scene.add(wall4);

// Create the bedroom floor
const floorGeometry = new THREE.BoxGeometry(10, 0.1, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xff3921 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = -2.5;
scene.add(floor);

// Create the bedroom ceiling
const ceilingGeometry = new THREE.BoxGeometry(10, 0.1, 10);
const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0xA9A9A9 });
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceiling.position.y = 2.5;
scene.add(ceiling);

// Create the bed
const bedGeometry = new THREE.BoxGeometry(2, 0.5, 4);
const bedMaterial = new THREE.MeshBasicMaterial({ color: 0x009900 });
const bed = new THREE.Mesh(bedGeometry, bedMaterial);
bed.position.x = 2;
bed.position.y = -2;
bed.position.z = -2;
scene.add(bed);

// Create the nightstand
const nightstandGeometry = new THREE.BoxGeometry(1, 1, 1);
const nightstandMaterial = new THREE.MeshBasicMaterial({ color: 0x006666 });
const nightstand = new THREE.Mesh(nightstandGeometry, nightstandMaterial);
nightstand.position.x = -0.25;
nightstand.position.y = -2;
nightstand.position.z = -3;
scene.add(nightstand);

// Set the camera position
camera.position.z = 5;

const light = new THREE.SpotLight(0x006769, 1000);
light.position.set(3, 3, 3);
scene.add(light);

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // for mobile devices

// 6. Add Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})

animate();