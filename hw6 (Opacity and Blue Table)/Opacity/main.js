let link = document.querySelector("a");
let circle = document.querySelector(".play");

link.onclick = function() {
  circle.style.opacity = "0";
};

//Another working variant

// let link = document.getElementsByTagName("a");
// let circle = document.getElementsByClassName("play");
// link[0].onclick = function() {
//   circle[0].style.opacity = "0";
// };
