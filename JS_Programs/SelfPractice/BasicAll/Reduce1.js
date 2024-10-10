//  By Function

const num = [1, 2, 3];

const n = num.reduce(function (ac, value) {
    console.log(ac, " : ", value);
    return ac + value;
}, 0);

console.log(n);
