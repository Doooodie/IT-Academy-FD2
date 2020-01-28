let div = document.querySelector("div");
let button = document.createElement("button");
button.innerText = "Invert colors";
let table = document.createElement("table");
table.align = "center";

for (let i = 0; i < 10; i++) {
  let tr = document.createElement("tr");
  table.append(tr);

  for (let j = 0; j < 10; j++) {
    let td = document.createElement("td");
    tr.append(td);
  }
}

table.onmouseover = function(event) {
  if (event.target.tagName == "TD") {
    if (event.target.classList == "highlight") {
      event.target.classList.remove("highlight");
      return;
    }
    event.target.classList.add("highlight");
  }
};

button.onmousedown = function() {
  if (table.className == "white" || table.className == "") {
    table.className = "black";
  } else {
    table.className = "white";
  }
};

div.append(table);
div.append(button);
