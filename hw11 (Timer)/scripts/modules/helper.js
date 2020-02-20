function removeClass(className, elements) {
	elements.forEach(function(elem) {
		elem.classList.remove(className);
	});
}

function addClass(className, elements) {
	elements.forEach(function(elem) {
		elem.classList.add(className);
	});
}

export { removeClass, addClass };
