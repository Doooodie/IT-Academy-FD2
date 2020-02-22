export class Clock {
    constructor() {
        this.htmlElements = {
            output: document.querySelector(".container .output")
        };
    }

    init() {
        setInterval(this.onIntervalNextTick, 1000);
        this.onIntervalNextTick();
    }

    onIntervalNextTick = () => {
        const currentTime = new Date().toTimeString().split(" ", 1).join();
        this.htmlElements.output.innerText = currentTime;
    };
}