const PHONE_PRICE = 69.99;
const ACCESSORY_PRICE = 5.99;

let balance = +prompt("Введите баланс Вашего счёта: ", 1000);

let phoneSum = PHONE_PRICE + tax(PHONE_PRICE);
let accessorySum = ACCESSORY_PRICE + tax(ACCESSORY_PRICE);

let spendingThreshold = balance - getPhoneCost();

let overallPrice = getAccessoryCost() + getPhoneCost();
let restOfBalance = balance - overallPrice;

while (balance < PHONE_PRICE * 2 || balance == null || balance == "") {
  balance = +prompt("Этих денег не хватит для покупки! Введите баланс снова: ", 1000);
}

function roundingToTwo(n) {
  return parseInt(n * 100) / 100;
}

function tax(a) {
  return roundingToTwo(a * 0.2);
}

function showDollar() {
    return "$";
}

function getAccessoryCost() {
  let accessorySumAfter = accessorySum;
  while (accessorySumAfter < spendingThreshold - accessorySum) {
    accessorySumAfter = accessorySumAfter + accessorySum;
  }
  return roundingToTwo(accessorySumAfter);
}

function getPhoneCost() {
  let phoneSumAfter = phoneSum;
  while (phoneSumAfter < balance - phoneSum) {
    phoneSumAfter = phoneSumAfter + phoneSum;
  }
  return roundingToTwo(phoneSumAfter);
}

alert(
    "Стоимость одного телефона: " + showDollar() + PHONE_PRICE +
    "\n" + "Вы смогли купить телефонов на: " + showDollar() + getPhoneCost() +
    "\n" + "Налоги на телефоны (включены в стоимость): " + showDollar() + tax(getPhoneCost()) +
    "\n" +
    "\n" + "Стоимость одного аксессуара: " + showDollar() + ACCESSORY_PRICE +
    "\n" + "Вы смогли купить аксессуаров на: " + showDollar() + getAccessoryCost() +
    "\n" + "Налоги на аксессуары (включены в стоимость): " + showDollar() + tax(getAccessoryCost()) +
    "\n" +
    "\n" + "Общая стоимость товаров (включая налоги): " + showDollar() + roundingToTwo(overallPrice) +
    "\n" + "Остаток на балансе: " + showDollar() + roundingToTwo(restOfBalance)
);
