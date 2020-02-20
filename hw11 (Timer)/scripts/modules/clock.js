const htmlElements = {
    output: document.querySelector(".container .output"),
}

export class Clock {
    init() {
        setInterval(this.onIntervalNextTick, 1000);
        this.onIntervalNextTick();
    }

    onIntervalNextTick() {
        let currentTime = new Date().toTimeString().split(" ", 1).join();
        htmlElements.output.innerText = currentTime;
    }
}