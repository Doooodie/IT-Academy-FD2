let table = document.querySelector("table");
let oddStr = table.querySelectorAll("tr:nth-child(odd)");

for (let i = 0; i < oddStr.length; i++) {
  oddStr[i].style.background = "blue";
  oddStr[i].style.color = "white";
}