if(true){
    let a = 10;                                  // if tak scope
    const b = 20;                                // if tak scope
    var c = 30;                                  // if ke Bahar tak scope
}

console.log(c);

//--------------------------------------------------------------------------------

let first = 300;
if(true){
    let first = 10;
    const temp = 20;
    console.log("INNER",first);                 //inner block level
}
console.log("Outer",first);                     //outer globel level 
