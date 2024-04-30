import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'stats.js';

export default class App {
  constructor() {
    this._renderer = undefined;
    this._camera = undefined;
    this._scene = undefined;

    this._mesh = undefined;

    this._raf = undefined;
    this._stats = new Stats();
    document.body.appendChild(this._stats.dom);

    this._init();
  }

  _init() {
    this._renderer = new WebGLRenderer({
      canvas: document.querySelector('#canvas'),
    });

    const aspect = window.innerWidth / window.innerHeight;
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    this._camera = new PerspectiveCamera(75, aspect, 1, 100);
    this._camera.position.z = 5;

    this._scene = new Scene();

    // CONTROLS
    this._controls = new OrbitControls(this._camera, this._renderer.domElement);

    // MESH
    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial();

    const mesh = new Mesh(geometry, material);
    this._mesh = mesh;

    this._scene.add(this._mesh);

    // START
    this._initEvents();
    this._start();
  }

  _initEvents() {
    window.addEventListener('resize', this._onResize.bind(this));
  }

  _onResize() {
    const aspect = window.innerWidth / window.innerHeight;
    this._camera.aspect = aspect;
    this._camera.updateProjectionMatrix();
    this._renderer.setSize(window.innerWidth, window.innerHeight);
  }

  _start() {
    this._raf = window.requestAnimationFrame(this._animate.bind(this));
  }

  _pause() {
    window.cancelAnimationFrame(this._raf);
  }

  _animate() {
    this._stats.begin();
    this._raf = window.requestAnimationFrame(this._animate.bind(this));

    this._renderer.render(this._scene, this._camera);
    this._stats.end();
  }
}
