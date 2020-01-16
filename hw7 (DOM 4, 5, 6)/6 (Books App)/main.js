let container = document.querySelector(".container");
let searchBooks = document.querySelector("#SearchBooks");
let ulBooks = document.querySelector("ul");
let liBooks = document.querySelectorAll("li");
let delBooks = document.querySelectorAll("li > button");
let hideBooks = document.querySelector("#hide");
let addBook = document.querySelector("#AddBook");
let addBookByName = document.querySelector("#AddBookByName");

hideBooks.onclick = function() {
  if (hideBooks.checked == true) {
    ulBooks.remove();
  } else {
    container.append(ulBooks);
  }
};

addBook.onclick = function() {
  let newBook = liBooks[0].cloneNode(true);
  let newBookName = newBook.firstElementChild;
  newBookName.innerText = addBookByName.value;
  ulBooks.append(newBook);
};

searchBooks.onfocus = function() {};

searchBooks.oninput = function() {
  let val = this.value.trim();
  if (val != "") {
    liBooks.forEach(function(elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add("hide");
        elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove("hide");
        let str = elem.innerText;
        elem.innerHTML = insertMark(
          str,
          elem.innerText.search(val),
          val.length
        );
      }
    });
  } else {
    liBooks.forEach(function(elem) {
      elem.classList.remove("hide");
      elem.innerHTML = elem.innerText;
    });
  }
};
