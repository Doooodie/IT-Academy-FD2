import { Animal } from "./Animal.js";

class Dino extends Animal {
	constructor(sx, sy, width, height, dx, dy) {
		super(sx, sy, width, height, dx, dy);
	}
}

export let aliveDino = new Dino(1176, 1, 44, 47, 400, 100);
export let deadDino = new Dino(1000, 1, 44, 47, 400 + (aliveDino.width + 10), 100);