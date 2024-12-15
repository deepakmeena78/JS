function num(a, b, c) {
    c(a + b);
}

num(5, 6, function (some) {
    console.log(some);
})