const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const n = arr
    .map((num) => num * 10)
    .map((num) => num + 2)
    .filter((num) => num >= 50)               // output [ 52, 62, 72, 82, 92, 102 ]

console.log(n);