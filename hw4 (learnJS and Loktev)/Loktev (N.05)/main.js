function treeSum(arr) {
  let sum = 0;
  let str = arr.join("");
  arr = str.split(",");
  str = arr.join("");
  arr = str.split("");
  for (let item of arr) {
    sum += +item;
  }
  return sum;
}

console.log(treeSum([1, 2, [[5, 12, 7], 4], [20, 19], [5, [6, [7, [8]]]]]));

// [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]