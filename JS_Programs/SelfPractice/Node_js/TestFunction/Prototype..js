const person = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const student = Object.create(person); // Prototypal inheritance
student.name = "Deepak";
student.age = 19;

student.greet();
