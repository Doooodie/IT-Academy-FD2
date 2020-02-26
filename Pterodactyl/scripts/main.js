const img = document.createElement("img");
img.src = "assets/images/sprite.png";
const canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
img.onload = function() {
    document.body.prepend(canvas);
    ctx.drawImage(img, 1, 52, 1000, 12, 0, 135, 1000, 12);
    ctx.drawImage(img, 130, 1, 46, 30, 50, 50, 46, 30);
}