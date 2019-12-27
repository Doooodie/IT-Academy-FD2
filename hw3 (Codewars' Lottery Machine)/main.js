function lottery(str) {
  let result = "";
  let count = -1;
  for (let i = 0; i <= str.length; i++) {
    if (isNaN(str[i]) == false && str[i] != result[count]) {
      result += str[i];
      count++;
    }
  }
  if (result == "") {
    return (result = "One more run!");
  }
  return result;
}

console.log(lottery("wQ8Hy0y5m5oshQPeRCkG"));
