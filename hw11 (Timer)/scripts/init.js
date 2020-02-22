import { Tabs } from "./modules/tabs.js";
import { Clock } from "./modules/clock.js";
import { Stopwatch } from "./modules/stopwatch.js";

const tabs = new Tabs();
const clock = new Clock();
const stopwatch = new Stopwatch();

function init() {
    tabs.init();
    clock.init();
    stopwatch.init();
}

init();