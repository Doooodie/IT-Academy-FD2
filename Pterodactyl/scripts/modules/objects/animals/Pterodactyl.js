import { Animal } from "./Animal.js";

class Pterodactyl extends Animal {
	constructor(sx, sy, width, height, dx, dy) {
		super(sx, sy, width, height, dx, dy);
	}

	flitter = ptero => {
		if (ptero.sx == 130) {
			ptero.sx = 176;
			ptero.height = 34;
			ptero.dHeight = ptero.height;
		} else {
			ptero.sx = 130;
			ptero.height = 30;
			ptero.dHeight = ptero.height;
		}
	};

	fly = ptero => {
		if (ptero.dy === 50) {
			ptero.dy += 50;
		} else {
			ptero.dy -= 50;
		}
	};
}

export let ptero = new Pterodactyl(130, 1, 46, 30, 50, 100);
