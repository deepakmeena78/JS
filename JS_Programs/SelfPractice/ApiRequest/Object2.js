const obj = {
    Name: "Deepak",
    Batch: 10,
    Learn: "Js",

    getO: function () {
        console.log(this);
    }
}

console.log(obj);

function user(Name, Batch, Learn) {
    this.Name = Name;
    this.Batch = Batch;
    this.Learn = Learn;
    return this
}

const one = new user("Jayesh", 11, "Java")
const two = new user("Tanmay", 12, "DB")
console.log(one);
console.log(two);
