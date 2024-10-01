function myname(){
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("N");
    console.log("A");   
}
myname()                                             // function excution => ()  <=

//------------------------------------------------------------

function add (num1,num2){
    console.log(num1 + num2);
}
add(5,3)                                              //  argument

//------------------------------------------------------------

function add2 (num1 ,num2){
    let result = num1+ num2
    return result                                     //return value
}

console.log(add2(4,6));

//------------------------------------------------------------

function user (name){
    return `${name} return any name `
}
console.log(user("Ankit"));                           //output => Ankit return any name

//------------------------------------------------------------

function user2 (name){
    if(!name){
        console.log("Enter User Name");
        return
    }
    return `${name} return any name `                   // User Not Full Fill Function Then Check And Print
}
console.log(user2());  