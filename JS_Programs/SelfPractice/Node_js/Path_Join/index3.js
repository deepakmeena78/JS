// const av = require('./index2');
// const b = av.add(3, 4);
// console.log(b);


const data = require('./index');
const calc = new data(3, 5);

console.log(calc.add());
console.log(calc.divide());
console.log(calc.multiply());
console.log(calc.subtract());