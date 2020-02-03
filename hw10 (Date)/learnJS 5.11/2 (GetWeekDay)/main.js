function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  for (let i = 0; i < days.length; i++) {
      if (date.getDay() == i) {
          return days[i];
      }
  }
}

console.log(getWeekDay(new Date(2012, 0, 3))); // 3 января 2012 года, нужно вывести "ВТ"