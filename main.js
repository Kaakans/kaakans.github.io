import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
document.body.addEventListener("keydown", onKeyDown, false);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const arrowMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const arrowGeometry = new THREE.BufferGeometry().setFromPoints(points);
const arrow = new THREE.Line(arrowGeometry, arrowMaterial);
scene.add(arrow);

camera.position.z = 15;

const keyCodes = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  w: 87,
  a: 65,
  s: 83,
  d: 68,
};

function onKeyDown(event) {
  switch (event.keyCode) {
    case keyCodes.up:
      cube.position.y += 1;
      break;
    case keyCodes.down:
      cube.position.y -= 1;
      break;
    case keyCodes.left:
      cube.position.x -= 1;
      break;
    case keyCodes.right:
      cube.position.x += 1;
      break;
  }
}


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
