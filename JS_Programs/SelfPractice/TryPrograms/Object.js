let arr = [1, 2, 3, 4, 5];

let obj = {
    name: "Deepak",
    Age: 19
};


console.log(obj);

Object.freeze(obj);

obj.Age = 67;

console.log(obj);
