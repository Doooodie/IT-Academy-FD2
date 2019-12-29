function treeSum(arr) {
  let sum = 0;
  for (let item of arr) {
    if (Array.isArray(item) == true) {
      sum += treeSum(item);
    } else {
      sum += item;
    }
  }
  return sum;
}

console.log(treeSum([1, 2, [[5, 12, 7], 4], [20, 19], [5, [6, [7, [8]]]]]));