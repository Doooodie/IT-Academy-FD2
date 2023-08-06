import { sun } from "./ObjectConstructor.js";
import Background from "./entities/Background.js";
import Obstacles from "./entities/Obstacles.js";
import ptero from "./entities/Ptero.js";

class Objects {
	constructor() {
		this.staticObjects = [ptero, sun];
	}

	draw(ctx) {
		this.staticObjects.forEach(object => {
			object.draw(ctx);
		});

		Background.draw();
		Obstacles.draw();
	}
}

export default new Objects();
