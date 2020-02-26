class Canvas {
	constructor() {
		this.canvas = document.createElement("canvas");
		this.canvas.innerText = "Ваш браузер не поддерживается.";
		this.canvas.width = 600;
		this.ctx = this.canvas.getContext("2d");
	}

	draw() {
		document.body.prepend(this.canvas);
	}
}

export const cvs = new Canvas();