import "./style.css";

import App from "./App/index.js";

import GUIController from "./App/GUIController/index.js";

const loading = document.querySelector(".loading-container");

const app = new App(() => {
    loading.style.display = "none";
    const canvas = document.querySelector("#canvas");
    canvas.style.display = "block";

    const onCameraHelperChange = (v) => {
        app.toggleCameraHelper(v);
    };

    new GUIController(onCameraHelperChange);
});
