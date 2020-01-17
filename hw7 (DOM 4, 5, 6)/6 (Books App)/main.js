let container = document.querySelector(".container");
let searchBooks = document.querySelector("header > input");
let ulBooks = document.querySelector("ul");
let liBooks = document.querySelectorAll("li");
let hideBooks = document.querySelector("#hide");
let addBookButton = document.querySelector("#add-book-button");
let addBookInput = document.querySelector("#add-book-input");

ulBooks.addEventListener("click", function(event) {
  if (event.target.innerText == "Delete") {
    let bookItem = event.target.parentElement;
    bookItem.remove();
  }
});

hideBooks.onclick = function() {
  if (hideBooks.checked == true) {
    ulBooks.remove();
  } else {
    container.append(ulBooks);
  }
};

addBookButton.onclick = function() {
  let newBook = liBooks[0].cloneNode(true);
  let newBookName = newBook.firstElementChild;
  newBookName.innerText = addBookInput.value;
  ulBooks.append(newBook);
};

searchBooks.oninput = function() {
  if (this.value != "") {
    liBooks.forEach(function(elem) {
      if (
        elem.firstElementChild.innerText
          .toLowerCase()
          .indexOf(searchBooks.value.toLowerCase()) == -1
      ) {
        elem.classList.add("hide");
      } else {
        elem.classList.remove("hide");
      }
    });
  } else {
    liBooks.forEach(function(elem) {
      elem.classList.remove("hide");
    });
  }
};
