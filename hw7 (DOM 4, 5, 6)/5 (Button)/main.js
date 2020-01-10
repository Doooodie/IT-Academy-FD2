let button = document.querySelector("input");
let words = [
  "Rock",
  "Paper",
  "Scissor",
  "Life",
  "Wallet",
  "Lorem",
  "Ipsum",
  "Length",
  "Boom"
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

button.onclick = function() {
  button.style.backgroundColor = "#" + getRandomInt(100, 1000);
  button.value = words[Math.floor(Math.random() * words.length)];
};
