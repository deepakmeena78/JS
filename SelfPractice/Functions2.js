function price(...rs) {      //rest opretore multipul value store
    return rs
}
console.log(price(100, 344, 66));

//------------------------------------------------------------------------

const user = {
    name: "Ankit",
    age: 19
}

function handel(any) {
    console.log(`user name is ${any.name} and age ${any.age}`);
}
handel({
    name: "Infobeans",
    age: Number
})

const newarr = [3, 6, 8, 2, 0]
function get(getarr) {
    return getarr
}
console.log(get(newarr));
