import { canvas } from "./canvas.js";
import { ptero } from "./objects/animals/Pterodactyl.js";
import { objects } from "./objects/Objects.js";

document.addEventListener("keydown", () => ptero.fly(objects.objectsArr[0]));

export function drawGame() {
	canvas.transform();
	objects.draw(canvas.ctx, canvas.cvs);
	requestAnimationFrame(drawGame);
}

export function pteroFlitter() {
	ptero.flitter(objects.objectsArr[0]);
}