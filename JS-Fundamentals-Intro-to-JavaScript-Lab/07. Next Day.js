function nextDay(year, month, day) {
    let today = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDay = new Date(today.getTime() + oneDay);
    return nextDay.getFullYear() + '-' + (nextDay.getMonth() + 1) + "-" + nextDay.getDate();

}

console.log(nextDay(2016, 9, 30));