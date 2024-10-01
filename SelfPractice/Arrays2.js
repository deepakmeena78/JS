let arr = [3,5,7,2]
let arr2 = [2,6,8,3]

//------------------------------------------------------------------------

const all = arr.concat(arr2)
console.log(all);

//------------------------------------------------------------------------

const arr6 = [...arr,...arr2]
console.log(arr6);

//------------------------------------------------------------------------

console.log(Array.isArray("Ankit"));
console.log(Array.from("Ankit"));
console.log(Array.from({name: "Ankit"}));

//------------------------------------------------------------------------

let a = 10
let b = 20
let c = 30
console.log(Array.of(a,b,c));
