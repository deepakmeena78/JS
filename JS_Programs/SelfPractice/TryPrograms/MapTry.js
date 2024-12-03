let arr = new Map()
arr.set(1, "a");
arr.set(2, "b");
arr.set(3, "c");
arr.set(4, "d");
arr.set(2, "e");

for (const [key, value] of arr) {
    console.log(key, " : ", value);
}

// --------------------------------------

let str = "DEEPAK";

for (const [key, value] of str) {
    console.log(key, " : ", value);
}