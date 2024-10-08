const arr = [
    {
        name: "Ankit",
        age: 19
    },
    {
        name: "Deepak",
        age: 19,
    },
    {
        name: "Jayesh",
        age: 21
    }
]

arr.forEach((value) => {
    console.log(value.age, " , ", value.name);
})