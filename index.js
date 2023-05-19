// Obtén el contenedor del canvas
const canvas = document.getElementById('canvas');

// Crea la escena
const scene = new THREE.Scene();

// Crea la cámara
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Crea el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Agrega el renderizador al contenedor del canvas
canvas.appendChild(renderer.domElement);

// Crea un cargador de GLTF
const loader = new THREE.GLTFLoader();

// Carga el archivo .glb
loader.load('images/caja_pensando.glb', (gltf) => {
  // Agrega el modelo a la escena
  scene.add(gltf.scene);
  console.log(gltf)
});


// Actualiza la posición de la cámara
camera.position.z = 5;

// Renderiza la escena
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();