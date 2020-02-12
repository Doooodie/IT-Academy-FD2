import {htmlElements} from "./htmlElements.js";

class Tabs {
    constructor(clock, stopwatch, timer) {
        this.clock = clock;
        this.stopwatch = stopwatch;
        this.timer = timer;
    }

    activateTab() {
        this.forEach(function() {
            classList.remove("selected");
        });
        this.classList.add("selected");
        clearInterval(interval);
    }
}

export const tabs = new Tabs(htmlElements.clock, htmlElements.stopwatch, htmlElements.timer);