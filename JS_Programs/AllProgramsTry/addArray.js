let arr = [1, 2, "m", 3, "ww"];

let result = arr.filter((item) => {
    return typeof item === "number" 
});

console.log(result);