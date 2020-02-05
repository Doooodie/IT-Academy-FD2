let interval = setInterval(onIntervalNextTick, 1000);

const htmlElements = {};
htmlElements.startBtn = document.querySelector(".container .buttons button.start");
htmlElements.stopBtn = document.querySelector(".container .buttons button.stop");
htmlElements.resetBtn = document.querySelector(".container .buttons button.reset");
htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.output = document.querySelector(".container .output");

htmlElements.clock.addEventListener("click", deactivateStopwatch);
htmlElements.stopwatch.addEventListener("click", activateStopwatch);
htmlElements.timer.addEventListener("click", deactivateStopwatch);

function onIntervalNextTick() {
	currentTime = new Date().toTimeString().split(" ", 1).join();
	htmlElements.output.innerText = currentTime;
}

onIntervalNextTick();

function activateElement() {
    htmlElements.clock.classList.remove("selected");
    htmlElements.stopwatch.classList.remove("selected");
    htmlElements.timer.classList.remove("selected");
    event.currentTarget.classList.add("selected");
    clearInterval(interval);
}

function deactivateStopwatch() {
    activateElement();
    onIntervalNextTick();
	interval = setInterval(onIntervalNextTick, 1000);
	htmlElements.startBtn.classList.add("hidden");
	htmlElements.stopBtn.classList.add("hidden");
	htmlElements.resetBtn.classList.add("hidden");
}

function activateStopwatch() {
    activateElement();
	htmlElements.output.innerText = "0:00";
	htmlElements.startBtn.addEventListener("click", startTimer());
	// htmlElements.stopBtn.addEventListener("click", stopTimer());
	htmlElements.startBtn.classList.remove("hidden");
	htmlElements.stopBtn.classList.remove("hidden");
	htmlElements.resetBtn.classList.remove("hidden");
}

function startTimer() {
	const startTime = new Date().getTime();
	interval = setInterval(Timer, 1000);
	function Timer() {
		const difference = (new Date().getTime() - startTime) / 1000;
		let seconds = parseInt(difference % 60);
		const minutes = parseInt((difference / 60) % 60);
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		htmlElements.output.innerText = `${minutes}:${seconds}`;
	}
}
