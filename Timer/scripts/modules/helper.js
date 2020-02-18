function removeClass(elements) {
    elements.forEach(function(elem) {
        elem.className = elem.dataset.mode;
    });
}

function addClass(className, elements) {
	elements.forEach(function (elem) {
		elem.className = elem.dataset.mode + ' ' + className;
	});
}

export { removeClass, addClass }