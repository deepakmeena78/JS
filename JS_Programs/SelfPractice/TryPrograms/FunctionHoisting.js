// greet();
// function greet() {
//     console.log("Hello");
// }

// //  Function declarations puri tarah hoist hota hain, isliye aap function ko
// //  pehle bhi call kar sakte ho.

// console.log(sayHi); // undefined
// var sayHi = function () {
//     console.log("Hi");
// };


console.log(a); //  ReferenceError: Cannot access 'age' before initialization
let a = 30;      // Temporal Dead Zone (TDZ): Let And Const
