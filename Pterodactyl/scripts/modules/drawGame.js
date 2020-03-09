import canvas from "./Canvas.js";
import objects from "./objects/Objects.js";
import ptero from "./objects/instances/Ptero.js";

let flittering = setInterval(() => ptero.flitter(), 200);
let downPressed,
	upPressed,
	leftPressed,
	rightPressed = false;

document.addEventListener("keydown", event => {
	ptero.flySound.play();
	if (event.key == "ArrowDown") {
		downPressed = true;
	} else if (event.key == "ArrowUp") {
		upPressed = true;
	} else if (event.key == "ArrowLeft") {
		clearInterval(flittering);
		ptero.sx = 130;
		ptero.height = 30;
		ptero.dHeight = ptero.height;
		leftPressed = true;
	} else if (event.key == "ArrowRight") {
		rightPressed = true;
	}
});

document.addEventListener("keyup", event => {
	if (event.key == "ArrowDown") {
		downPressed = false;
	} else if (event.key == "ArrowUp") {
		upPressed = false;
	} else if (event.key == "ArrowLeft") {
		flittering = setInterval(() => ptero.flitter(), 200);
		leftPressed = false;
	} else if (event.key == "ArrowRight") {
		rightPressed = false;
	}
});

export default function drawGame() {
	canvas.ctx.clearRect(0, 0, canvas.cvs.width, canvas.cvs.height);
	canvas.transform();
	objects.draw(canvas.ctx);
	ptero.fly(downPressed, upPressed, leftPressed, rightPressed);
	requestAnimationFrame(drawGame);
}
