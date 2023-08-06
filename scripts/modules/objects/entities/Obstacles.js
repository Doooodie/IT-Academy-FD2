import { ObjectConstructor, cactus } from "../ObjectConstructor.js";
import { Dino, dino } from "./Dino.js";
import gameState from "../instances/GameState.js";
import canvas from "../../Canvas.js";
import ptero from "./Ptero.js";

class Obstacles {
	constructor() {
		this.dinos = [dino];
		this.cactuses = [cactus];
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	drawImage(obj) {
		obj.draw(canvas.ctx);

		if (obj.sx == dino.sx) {
			obj.dx -= ptero.speed * 1.25;

			obj.jump();
			if (obj.dx == 240) {
				this.dinos.push(new Dino(1176, 1, 44, 47, canvas.cvs.width, 100));
			}
		}
		if (obj.sx == cactus.sx || obj.sx == 425) {
			obj.dx -= ptero.speed;

			if (obj.dx == 200) {
				if (this.getRandomInt(2) > 0) {
					this.cactuses.push(
						new ObjectConstructor(425, 1, 51, 50, canvas.cvs.width, 100)
					);
				} else {
					this.cactuses.push(
						new ObjectConstructor(274, 1, 51, 35, canvas.cvs.width, 114)
					);
				}
			}
		}
	}

	initObstacle(arr) {
		arr.forEach(obj => {
			this.drawImage(obj);

			if (obj.dx == -3000) {
				arr.shift();
			}

			if (ptero.isCrashed(obj) == true) {
				gameState.stop(canvas.ctx);
			}
		});
	}

	draw() {
		this.initObstacle(this.dinos);

		if (ptero.distance > 1000) {
			this.initObstacle(this.cactuses);
		}
	}
}

export default new Obstacles();
