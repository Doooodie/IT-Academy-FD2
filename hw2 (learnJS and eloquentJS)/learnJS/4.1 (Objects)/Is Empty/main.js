let schedule = {};

function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));
