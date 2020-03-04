import { canvas } from "./modules/canvas.js";
import { drawGame, pteroFlitter } from "./modules/draw.js";
import { objects } from "./modules/objects/Objects.js";

function init() {
    canvas.draw();
    drawGame();
    setInterval(pteroFlitter, 200);
}

objects.img.onload = init;