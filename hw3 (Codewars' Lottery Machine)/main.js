function lottery(str) {
  let result = "";
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (isNaN(str[i]) == false && str[i] != result[count]) {
      let num = str[i];
      result += num;
      count++;
    }
  }
  if (result == "") {
    return (result = "One more run!");
  }
  return result;
}

console.log(lottery("wQ8Hy0y5m5oshQPeRCkG"));
