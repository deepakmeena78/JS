const my = Symbol("KEY !")

const user = {
    name: "Ankit",
    age: 19,
    Location: "Indore",
    email: "deepakmeenaa78@gmail.com",
    BestDay: ["Saturday", "Sunday"]
}

console.log(user.name);
console.log(user.age);
console.log(user.Location);
console.log(user.email);
console.log(user.BestDay);

user.email = "dm2000535@gmail.com"
console.log(user.email);

user.greeting = function () {
    console.log("Hello World");
}
