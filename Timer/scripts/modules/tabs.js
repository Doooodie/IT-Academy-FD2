import { removeClass, addClass } from "./helper.js"

const htmlElements = {
    links: document.querySelectorAll(".container .links a"),
    tabs: document.querySelectorAll(".tabs > div")
};

export function Tabs() {}

Tabs.prototype.init = function() {
    htmlElements.links.forEach(function(link) {
        link.addEventListener("click", linkClicked);
    });
};

function linkClicked() {
    console.log(this);
    selectLink(this);
    activateContent(htmlElements.tabs);
}

function selectLink(elem) {
    removeClass(htmlElements.links);
    elem.classList.add("selected");
}

function activateContent(elem) {
    const target = elem.dataset.mode;

    addClass("hidden", htmlElements.tabs);

	htmlElements.tabs.forEach(function (tab) {
		if(tab.dataset.mode == target){
			tab.className = tab.dataset.mode;
		}
    });
    
    elem.classList.remove("hidden");
}