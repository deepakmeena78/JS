const str = "me hu ankit";

let result = str.split(" ").map((item) => {
    return item.split("").reverse().join("");
    
}).join(" ");

console.log(result);
