import { cvs } from "./canvas.js"

import { ptero } from "./objects/animals/Pterodactyl.js";
import { aliveDino, deadDino } from "./objects/animals/Dino.js";
import { foreground } from "./objects/background/Foreground.js";
import { cloud } from "./objects/background/Cloud.js";
import { sun } from "./objects/background/Sun.js";

export const img = document.createElement("img");
img.src = "./assets/images/sprite.png";

document.addEventListener("keydown", fly);

export function draw() {
	cvs.ctx.clearRect(0, 0, cvs.canvas.width, cvs.canvas.height);

	cvs.draw();

	cvs.ctx.drawImage(img, ptero.sx, ptero.sy, ptero.width, ptero.height, ptero.dx, ptero.dy, ptero.dWidth, ptero.dHeight);
	
	cvs.ctx.drawImage(img, aliveDino.sx, aliveDino.sy, aliveDino.width, aliveDino.height, aliveDino.dx, aliveDino.dy, aliveDino.dWidth, aliveDino.dHeight);
	cvs.ctx.drawImage(img, deadDino.sx, deadDino.sy, deadDino.width, deadDino.height, deadDino.dx, deadDino.dy, deadDino.dWidth, deadDino.dHeight);

	cvs.ctx.drawImage(img, cloud.sx, cloud.sy, cloud.width, cloud.height, cloud.dx, cloud.dy, cloud.dWidth, cloud.dHeight);
	cvs.ctx.drawImage(img, sun.sx, sun.sy, sun.width, sun.height, sun.dx, sun.dy, sun.dWidth, sun.dHeight);
	cvs.ctx.drawImage(img, foreground.sx, foreground.sy, foreground.width, foreground.height, foreground.dx, foreground.dy, foreground.dWidth, foreground.dHeight);

	aliveDino.dx -= 1;
	deadDino.dx -= 1;
	foreground.dx -= 1;
	cloud.dx -= 1;

	requestAnimationFrame(draw);
}

function fly() {
	cvs.ctx.clearRect(ptero.dx, ptero.dy, ptero.dWidth, ptero.dHeight);

	if (ptero.dy === 30) {
		ptero.dy += 20;
	} else {
		ptero.dy -= 20;
	}
}