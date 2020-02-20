import { Tabs } from "./modules/tabs.js";
import { Clock } from "./modules/clock.js";

const tabs = new Tabs();
const clock = new Clock();

function init() {
    tabs.init();
    clock.init();
}

init();