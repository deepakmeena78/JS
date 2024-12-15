let temp = function (a, b) {
    return a + b;
}
console.log(temp(5, 5));


(function (a, b) {
    console.log(a + b);
})(5, 5);


console.log((function (a, b) {
    return a + b;
})(5, 5));


