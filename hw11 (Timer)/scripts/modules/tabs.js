import { removeClass, addClass } from "./helper.js";

export class Tabs {
	constructor() {
		this.htmlElements = {
			links: document.querySelectorAll(".container .links a"),
			tabs: document.querySelectorAll(".tabs > div")
		};
	}

	init = () => {
		this.htmlElements.links.forEach(link =>
			link.addEventListener("click", this.linkClicked)
		);
	};

	linkClicked = () => {
		this.activateLink(event.target);
		this.activateTab(event.target);
	};

	activateLink = link => {
		removeClass("selected", this.htmlElements.links);
		link.classList.add("selected");
	};

	activateTab = elem => {
		addClass("hidden", this.htmlElements.tabs);

		this.htmlElements.tabs.forEach(function(tab) {
			if (tab.dataset.mode == elem.dataset.mode) {
				tab.classList.remove("hidden");
			}
		});
	};
}
