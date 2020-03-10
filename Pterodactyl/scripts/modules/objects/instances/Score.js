import canvas from "../../Canvas.js";

class Score {
	constructor() {
		this.font = "14px 'Press Start 2P'";
		canvas.ctx.font = this.font;
		canvas.ctx.textAlign = "right";

		this.sound = new Audio();
		this.sound.src = "./assets/sounds/score-reached.mp3";

		this.amount = 0;
		this.dx = canvas.cvs.width - 10;
		this.dy = 40;
		this.width;

		this.highScore = 0;
		this.highScoreDx;

		this.savedScore = localStorage.getItem("amount");
	}

	draw(obj) {
		if (this.amount) {
			canvas.ctx.fillStyle = "black";
			canvas.ctx.fillText(this.amount, this.dx, this.dy);
			this.width = canvas.ctx.measureText(this.amount).width;
		}

		if (localStorage.key) {
			this.highScoreDx = this.dx - this.width - 15;
			canvas.ctx.fillStyle = "gray";
			canvas.ctx.fillText("HI " + this.highScore, this.highScoreDx, this.dy);
		}

		if (this.amount % 100 == 0 && this.amount > 0) {
			this.sound.play();
		}

		obj.distance += 1 * obj.speed;
		if (Math.floor(obj.distance) % 10 == 0) {
			this.amount++;
			if (this.savedScore < this.amount) {
				this.highScore++;
			} else {
				this.highScore = this.savedScore;
			}
		}
	}
}

export default new Score();
