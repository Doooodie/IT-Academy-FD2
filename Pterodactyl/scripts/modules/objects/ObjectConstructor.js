class ObjectConstructor {
	constructor(sx, sy, width, height, dx, dy) {
		this.img = document.createElement("img");
		this.img.src = "./assets/images/sprite.png";
		this.sx = sx;
		this.sy = sy;
		this.width = width;
		this.height = height;
		this.dx = dx;
		this.dy = dy;
		this.dWidth = width;
		this.dHeight = height;
	}

	draw = ctx =>
		ctx.drawImage(
			this.img,
			this.sx,
			this.sy,
			this.width,
			this.height,
			this.dx,
			this.dy,
			this.dWidth,
			this.dHeight
		);
}

const cactus = new ObjectConstructor(274, 1, 51, 35, 600, 114);
const cloud = new ObjectConstructor(83, 1, 46, 13, 500, 20);
const sun = new ObjectConstructor(537, 1, 40, 40, 400, 5);
const foreground = new ObjectConstructor(1, 52, 1200, 12, 0, 135);

export { ObjectConstructor, cactus, cloud, sun, foreground };
