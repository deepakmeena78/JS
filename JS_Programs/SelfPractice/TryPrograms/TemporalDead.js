// console.log(age);

// var age = 16;

// console.log(age);

// {
//     console.log(bar); // "undefined"
//     console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
//     var bar = 1;
//     let foo = 2; // End of TDZ (for foo)
// }


{
    const func = function () {
        console.log(letVar); // OK
    }

    let letVar = 3;
    func();
}
