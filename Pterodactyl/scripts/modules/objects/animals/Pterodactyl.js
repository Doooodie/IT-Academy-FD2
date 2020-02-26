import { Animal } from "./Animal.js";

class Pterodactyl extends Animal {
	constructor(sx, sy, width, height, dx, dy) {
		super(sx, sy, width, height, dx, dy);
	}

	
}

export let ptero = new Pterodactyl(130, 1, 46, 30, 50, 50);
