import { Background } from "./Background.js";

class Cloud extends Background {
	constructor(sx, sy, width, height, dx, dy) {
		super(sx, sy, width, height, dx, dy);
	}
}

export let cloud = new Cloud(83, 1, 46, 13, 300, 20);