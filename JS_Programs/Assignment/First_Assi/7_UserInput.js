//*2. Write a program to take two strings as input from the user. Confirm that the strings are
//equal.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Your Name :  ',s1 => {
readline.question('Confirm Your Name :  ',s2 => {
    if(s1 == s2){
        console.log(`Equal : ${s1}`);
    }
    else{
        console.log("Not Equal");
    }
    readline.close();
});
});