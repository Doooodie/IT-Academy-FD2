function sumOfTwoFromArr(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] + arr[j] == num) {
        return true;
      }
    }
  }
  return false;
}

console.log(sumOfTwoFromArr([1, 2, 4, 9], 8));

console.log(sumOfTwoFromArr([1, 2, 4, 4], 8));
