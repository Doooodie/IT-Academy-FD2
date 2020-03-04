import { Background } from "./Background.js";

class Sun extends Background {
	constructor(sx, sy, width, height, dx, dy) {
		super(sx, sy, width, height, dx, dy);
	}
}

export let sun = new Sun(537, 1, 38, 40, 400, 5);