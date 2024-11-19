let arr = [1, 2, 3, 4, 5];

let bew = arr.filter(function (value) {
    if (value > 3) {
        return true
    }
    else {
        return false
    }
});

console.log(bew);
