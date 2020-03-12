import { drawGame } from "./modules/drawGame.js";
import canvas from "./modules/Canvas.js";

async function init() {
	const response = await fetch("./assets/images/sprite.png");

	if (response.ok) {
		canvas.draw();
		drawGame();
	} else {
		const div = document.createElement("div");
		const p = document.createElement("p");
		p.innerText = response.status + " ERROR";
		div.append(p);
		document.body.prepend(div);
	}
}

init();