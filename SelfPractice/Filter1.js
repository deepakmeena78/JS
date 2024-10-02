const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const a = arr.filter((num) => num > 5)
console.log(a);

//-------------

const b = arr.filter((n) => {
    return n < 5
})
console.log(b);
