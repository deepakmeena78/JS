//*3. Write a program to find total number of alphabets, digits or special character in a string.

let main;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Your Content :  ', str => {
    main = str;
    count(main);
    readline.close();
});


function count(value) {
    if(!value){
        return;
    }
    let alphabet = 0;
    let digit = 0;
    let special = 0;

    for (let char of value) {
        if (char.match(/[a-zA-Z]/)) {
            alphabet++;
        }
        else if (char.match(/[0-9]/)) {
            digit++;
        }
        else {
            special++;
        }
    }
    console.log(`Alphabet : ${alphabet}`);
    console.log(`Digit : ${digit}`);
    console.log(`Special : ${special}`);
}
