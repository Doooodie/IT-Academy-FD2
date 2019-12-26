var boardSize = 8;
var board = "";
let hashtag = "#";
let gap = " ";

for (let y = 0; y <= 8; y++) {
  for (let x = 0; x <= 8; x++) {
    if ((x + y) % 2 == 0) {
      board += gap;
    } else {
      board += hashtag;
    }
  }
  board += "\n";
}

console.log(board);
