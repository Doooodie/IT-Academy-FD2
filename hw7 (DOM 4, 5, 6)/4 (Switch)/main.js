let input1 = document.querySelectorAll("input")[0];
let input2 = document.querySelectorAll("input")[1];
let button = document.querySelectorAll("input")[2];

button.onclick = function() {
  let buffer1 = input1.value;
  let buffer2 = input2.value;
  input1.value = buffer2;
  input2.value = buffer1;
};
