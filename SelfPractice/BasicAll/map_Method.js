const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const n = arr.map((num) => num + 10);
const n1 = arr.map((num1) => {
  return num1 + 10;
});

console.log(n1);
console.log(n);

/* output
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
  */
