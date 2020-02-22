const htmlElements = {
	output: document.querySelectorAll(".container .output")[1],
	startBtn: document.querySelector(".container .buttons button.start"),
	stopBtn: document.querySelector(".container .buttons button.stop"),
	resetBtn: document.querySelector(".container .buttons button.reset")
};

export class Stopwatch {
	constructor() { this.interval }

	init() {
		htmlElements.output.innerText = "0:00";
		htmlElements.startBtn.addEventListener("click", this.startStopwatch);
		htmlElements.stopBtn.addEventListener("click", this.stopStopwatch);
		htmlElements.resetBtn.addEventListener("click", this.resetStopwatch);
	}

	startStopwatch = () => {
		htmlElements.output.innerText = "0:00";
		const startTime = new Date().getTime();
		this.interval = setInterval(Timer, 1000);

		function Timer() {
			const difference = (new Date().getTime() - startTime) / 1000;
			let seconds = parseInt(difference % 60);
			const minutes = parseInt((difference / 60) % 60);
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			htmlElements.output.innerText = `${minutes}:${seconds}`;
		}
	};

	stopStopwatch = () => clearInterval(this.interval);

	resetStopwatch = () => {
		this.stopStopwatch();
		htmlElements.output.innerText = "0:00";
	};
}
