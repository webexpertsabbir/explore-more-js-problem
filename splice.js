const number = [23, 13, 10, 40, 30, 20, 34];
const partial = number.splice(2, 4, 100, 200, 300);
console.log(partial);
console.log(number);