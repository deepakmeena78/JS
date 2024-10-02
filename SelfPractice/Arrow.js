const user = {
    name: "Ankit",
    age: 19,

    user2: function () {
        console.log(`${this.name}  Welcome to Our Grop `);
        console.log(this);

    }
}

user.user2()
user.name = "Meena"
user.user2()

//-----------------------------------------------------------

const add = (num1, num2) => (num1 + num2)
console.log(add(4, 6));
