let container = document.querySelector(".container");
let ul = document.querySelector("ul");
let liBooks = document.querySelectorAll("li");
let delBooks = document.querySelectorAll("li > button");
let hideBooks = document.querySelector("#hide");

for (let i = 0; i < delBooks.length; i++) {
  delBooks[i].onclick = function() {
    liBooks[i].remove();
  };
}

hideBooks.onclick = function() {
  if (hideBooks.checked == true) {
    ul.remove();
  } else {
    container.append(ul);
  }
};
