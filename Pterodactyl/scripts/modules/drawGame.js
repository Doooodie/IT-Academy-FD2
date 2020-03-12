import canvas from "./Canvas.js";
import objects from "./objects/Objects.js";
import ptero from "./objects/entities/Ptero.js";

let continueAnimating = {boolean: true};
let flapping = setInterval(() => ptero.flap(), 200);
let downPressed,
	upPressed,
	leftPressed,
	rightPressed = false;

const startMoving = event => {
	ptero.flySound.play();
	switch (event.key) {
		case "ArrowDown":
			downPressed = true;
			break;
		case "ArrowUp":
			upPressed = true;
			break;
		case "ArrowLeft":
			clearInterval(flapping);
			ptero.hover();
			leftPressed = true;
			break;
		case "ArrowRight":
			rightPressed = true;
			break;
	}
};

const stopMoving = event => {
	switch (event.key) {
		case "ArrowDown":
			downPressed = false;
			break;
		case "ArrowUp":
			upPressed = false;
			break;
		case "ArrowLeft":
			flapping = setInterval(() => ptero.flap(), 200);
			leftPressed = false;
			break;
		case "ArrowRight":
			rightPressed = false;
			break;
	}
};

document.addEventListener("keydown", startMoving);
document.addEventListener("keyup", stopMoving);

function drawGame() {
	canvas.ctx.clearRect(0, 0, canvas.cvs.width, canvas.cvs.height);
	canvas.transform();
	objects.draw(canvas.ctx);
	ptero.fly(downPressed, upPressed, leftPressed, rightPressed);
	if (continueAnimating.boolean == true) {
		requestAnimationFrame(drawGame);
	}
}

export { flapping, startMoving, stopMoving, drawGame, continueAnimating };
