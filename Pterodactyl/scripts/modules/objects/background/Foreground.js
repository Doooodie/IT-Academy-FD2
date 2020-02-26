import { Background } from "./Background.js";

class Foreground extends Background {
	constructor(sx, sy, width, height, dx, dy) {
		super(sx, sy, width, height, dx, dy);
	}
}

export let foreground = new Foreground(1, 52, 1000, 12, 0, 135);