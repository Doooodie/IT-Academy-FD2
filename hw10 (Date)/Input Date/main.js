let inputBirthday = document.querySelector("input");
let spanDaysToBirthday = document.querySelector("span");

inputBirthday.onblur = function() {
  if (checkIfDate(inputBirthday) == true) {
    showDaysToBirthday();
    inputBirthday.style.borderColor = "";
  } else {
    inputBirthday.style.borderColor = "red";
    spanDaysToBirthday.innerText = "ERROR";
  }
  animate(spanDaysToBirthday);
};

function showDaysToBirthday() {
  let birthday = new Date(Date.parse(inputBirthday.value));
  let currentDate = new Date();

  // Меняем год дня рождения на текущий год
  birthday.setFullYear(currentDate.getFullYear());
  // Если день рождения уже прошел, прибавляется год
  if (birthday <= currentDate) {
    birthday.setFullYear(birthday.getFullYear() + 1);
  }

  spanDaysToBirthday.innerText = Math.round(
    (birthday - currentDate) / 86400000
  );
}

function animate(element) {
  element.classList.add("animation");

  // По окончанию анимации удаляет класс с элемента, чтобы анимация смогла запуститься снова
  element.addEventListener("animationend", function() {
    this.classList.remove("animation");
  });
}

function checkIfDate(element) {
  if (isNaN(Date.parse(element.value)) == true) {
    return false;
  } else {
    return true;
  }
}
