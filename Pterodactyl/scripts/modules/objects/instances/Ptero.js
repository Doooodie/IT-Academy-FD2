import { ObjectConstructor } from "../ObjectConstructor.js";

class Ptero extends ObjectConstructor {
	constructor(sx, sy, width, height, dx, dy) {
		super(sx, sy, width, height, dx, dy);
		this.speed = 2;
		this.distance = 0;
		this.immortal = false;
		this.flySound = new Audio();
		this.deadSound = new Audio();
		this.flySound.src = "./assets/sounds/button-press.mp3";
		this.deadSound.src = "./assets/sounds/hit.mp3";
	}

	hover() {
		this.sx = 130;
		this.height = 30;
		this.dHeight = this.height;
	}

	flap() {
		if (this.sx == 130) {
			this.sx = 176;
			this.height = 34;
			this.dHeight = this.height;
		} else {
			this.hover();
		}
	}

	fly(keydown, keyup, keyleft, keyright) {
		if (keydown && this.dy < 110) {
			this.dy += 2;
		} else if (keyup && this.dy > 50) {
			this.dy -= 2;
		} else if (keyleft && this.dx > 10) {
			this.dx -= 3;
		} else if (keyright && this.dx < 550) {
			this.dx += 2;
		}
	}

	isCrashed(obj) {
		if (!this.immortal) {
			if (
				this.dx + this.width - 20 > obj.dx &&
				this.dx < obj.dx + obj.width &&
				this.dy + this.height > obj.dy &&
				this.dy < obj.dy + obj.height - 20
			) {
				return true;
			} else {
				return false;
			}
		}
	}
}

export default new Ptero(130, 1, 46, 30, 50, 100);
