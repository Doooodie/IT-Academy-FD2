let userSurName = prompt("Ваша фамилия?");
while (userSurName == null || userSurName == "" || userSurName < Infinity) {
  userSurName = prompt("Неверная фамилия! Пожалуйста, введите фамилию снова.");
}
let userName = prompt("Ваше имя?");
while (userName == null || userName == "" || userName < Infinity) {
  userName = prompt("Неверное имя! Пожалуйста, введите имя снова.");
}
let userLastName = prompt("Ваше отчество?");
while (userLastName == null || userLastName == "" || userLastName < Infinity) {
  userLastName = prompt("Неверное отчество! Пожалуйста, введите отчество снова.");
}
let age = prompt("Ваш возраст?");
while (isFinite(age) == false || age == null || age == "" || age > 100) {
  age = prompt("Неверный возраст! Пожалуйста, введите возраст снова.");
}
let sex = confirm("Ваш пол - мужской?");
let gender;
if (sex == true) {
  gender = "мужской";
} else {
  gender = "женский";
}
let retirementPension;
switch (sex) {
  case true:
    if (age >= 60) {
      retirementPension = "да";
    } else {
      retirementPension = "нет";
    }
    break;
  case false:
    if (age >= 55) {
      retirementPension = "да";
    } else {
      retirementPension = "нет";
    }
    break;
}

alert(
  "Ваше ФИО: " + userSurName + " " + userName + " " + userLastName +
    "\n" + "Ваш возраст в годах: " + age +
    "\n" + "Ваш возраст в днях: " + +age * 365 +
    "\n" + "Через 5 лет вам будет: " + +age + 5 +
    "\n" + "Ваш пол: " + gender +
    "\n" + "Вы на пенсии: " + retirementPension
);
