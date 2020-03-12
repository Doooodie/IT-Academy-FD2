import { flapping, startMoving, stopMoving, continueAnimating } from "../drawGame.js";
import { ObjectConstructor } from "./ObjectConstructor.js";
import score from "./instances/Score.js";
import ptero from "./instances/Ptero.js";

class GameState {
	constructor() {
		this.restartButton = new ObjectConstructor(1, 1, 36, 32, 260, 60);
		this.gameOverText = new ObjectConstructor(647, 14, 191, 11, 180, 40);
	}

	stop(ctx) {
		localStorage.setItem("amount", score.highScore);
		ptero.deadSound.play();
		this.restartButton.draw(ctx);
		this.gameOverText.draw(ctx);
		document.removeEventListener("keydown", startMoving);
        document.removeEventListener("keyup", stopMoving);
        continueAnimating.boolean = false;
		clearInterval(flapping);

		document.addEventListener("keyup", event => {
            if (event.code == "Space") {
                location.reload();
            }
        });
	}
}

export default new GameState();
