import { canvas } from "../canvas.js";

import { ptero } from "./animals/Pterodactyl.js";
import { aliveDino, deadDino } from "./animals/Dino.js";
import { foreground } from "./background/Foreground.js";
import { cloud } from "./background/Cloud.js";
import { sun } from "./background/Sun.js";

export class Objects {
	constructor() {
		this.img = document.createElement("img");
		this.img.src = "./assets/images/sprite.png";

		this.ptero = ptero;
		this.aliveDino = aliveDino;
		this.deadDino = deadDino;
		this.foreground = foreground;
		this.cloud = cloud;
		this.sun = sun;
		this.objectsArr = [];
		this.aliveDinos = [];
		this.foregrounds = [];
		this.clouds = [];

		this.objectsArr[0] = {
			name: "ptero",
			img: this.img,
			sx: this.ptero.sx,
			sy: this.ptero.sy,
			width: this.ptero.width,
			height: this.ptero.height,
			dx: this.ptero.dx,
			dy: this.ptero.dy,
			dWidth: this.ptero.dWidth,
			dHeight: this.ptero.dHeight
		};

		this.objectsArr[1] = {
			name: "sun",
			img: this.img,
			sx: this.sun.sx,
			sy: this.sun.sy,
			width: this.sun.width,
			height: this.sun.height,
			dx: this.sun.dx,
			dy: this.sun.dy,
			dWidth: this.sun.dWidth,
			dHeight: this.sun.dHeight
		};

		this.aliveDinos[0] = {
			name: "aliveDino",
			img: this.img,
			sx: this.aliveDino.sx,
			sy: this.aliveDino.sy,
			width: this.aliveDino.width,
			height: this.aliveDino.height,
			dx: canvas.cvs.width,
			dy: this.aliveDino.dy,
			dWidth: this.aliveDino.dWidth,
			dHeight: this.aliveDino.dHeight
		};

		this.foregrounds[0] = {
			name: "foregrounds",
			img: this.img,
			sx: this.foreground.sx,
			sy: this.foreground.sy,
			width: this.foreground.width,
			height: this.foreground.height,
			dx: this.foreground.dx,
			dy: this.foreground.dy,
			dWidth: this.foreground.dWidth,
			dHeight: this.foreground.dHeight
		};

		this.clouds[0] = {
			name: "cloud",
			img: this.img,
			sx: this.cloud.sx,
			sy: this.cloud.sy,
			width: this.cloud.width,
			height: this.cloud.height,
			dx: this.cloud.dx,
			dy: this.cloud.dy,
			dWidth: this.cloud.dWidth,
			dHeight: this.cloud.dHeight
		};
	}

	draw(ctx, cvs) {
		ctx.clearRect(0, 0, cvs.width, cvs.height);

		this.objectsArr.forEach(object => {
			ctx.drawImage(
				object.img,
				object.sx,
				object.sy,
				object.width,
				object.height,
				object.dx,
				object.dy,
				object.dWidth,
				object.dHeight
			);
		});

		for (let i = 0; i < this.aliveDinos.length; i++) {
			ctx.drawImage(
				this.aliveDinos[i].img,
				this.aliveDinos[i].sx,
				this.aliveDinos[i].sy,
				this.aliveDinos[i].width,
				this.aliveDinos[i].height,
				this.aliveDinos[i].dx,
				this.aliveDinos[i].dy,
				this.aliveDinos[i].dWidth,
				this.aliveDinos[i].dHeight
			);

			this.aliveDinos[i].dx--;

			if (this.aliveDinos[i].dx == 125) {
				this.aliveDinos.push({
					name: "aliveDino",
					img: this.img,
					sx: this.aliveDino.sx,
					sy: this.aliveDino.sy,
					width: this.aliveDino.width,
					height: this.aliveDino.height,
					dx: canvas.cvs.width,
					dy: this.aliveDino.dy,
					dWidth: this.aliveDino.dWidth,
					dHeight: this.aliveDino.dHeight
				});
			}

			if (this.aliveDinos[i].dx == -3000) {
				this.aliveDinos.shift();
			}
		}

		for (let i = 0; i < this.foregrounds.length; i++) {
			ctx.drawImage(
				this.foregrounds[i].img,
				this.foregrounds[i].sx,
				this.foregrounds[i].sy,
				this.foregrounds[i].width,
				this.foregrounds[i].height,
				this.foregrounds[i].dx,
				this.foregrounds[i].dy,
				this.foregrounds[i].dWidth,
				this.foregrounds[i].dHeight
			);

			this.foregrounds[i].dx--;

			if (this.foregrounds[i].dx == -600) {
				this.foregrounds.push({
					name: "foregrounds",
					img: this.img,
					sx: this.foreground.sx,
					sy: this.foreground.sy,
					width: this.foreground.width,
					height: this.foreground.height,
					dx: this.foreground.dx + canvas.cvs.width,
					dy: this.foreground.dy,
					dWidth: this.foreground.dWidth,
					dHeight: this.foreground.dHeight
				});
			}

			if (this.foregrounds[i].dx == -3000) {
				this.foregrounds.shift();
			}
		}

		for (let i = 0; i < this.clouds.length; i++) {
			ctx.drawImage(
				this.clouds[i].img,
				this.clouds[i].sx,
				this.clouds[i].sy,
				this.clouds[i].width,
				this.clouds[i].height,
				this.clouds[i].dx,
				this.clouds[i].dy,
				this.clouds[i].dWidth,
				this.clouds[i].dHeight
			);

			this.clouds[i].dx--;

			if (this.clouds[i].dx == 400) {
				this.clouds.push({
					name: "clouds",
					img: this.img,
					sx: this.cloud.sx,
					sy: this.cloud.sy,
					width: this.cloud.width,
					height: this.cloud.height,
					dx: canvas.cvs.width,
					dy: Math.floor(Math.random() * this.cloud.height) + this.cloud.height,
					dWidth: this.cloud.dWidth,
					dHeight: this.cloud.dHeight
				});
			}

			if (this.clouds[i].dx == -3000) {
				this.clouds.shift();
			}
		}
	}
}

export const objects = new Objects();
