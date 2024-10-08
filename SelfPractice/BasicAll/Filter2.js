const data = [
    { name: "jayesh", age: 21, salary: 30000 },
    { name: "Ankit", age: 19, salary: 31000 },
    { name: "Tanmay", age: 19, salary: 32000 },
    { name: "Mohit", age: 22, salary: 34000 },
    { name: "vipin", age: 21, salary: 25000 },
    { name: "Aryan", age: 21, salary: 35000 },
    { name: "Prakash", age: 19, salary: 36000 },
    { name: "Kapil", age: 23, salary: 30000 },
    { name: "Mohan", age: 20, salary: 29000 },
]

const user = data.filter((ur) => ur.salary >= 35000)                       // Type 1
const user1 = data.filter((ur) => {                                        // Type 2
    return ur.salary === 30000
})
console.log(user, " : ", user1);
