import {htmlElements} from "../main.js";

htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");

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

export const tabs = new Tabs(htmlElements.clock, htmlElements.stopwatch, htmlElements.button);