// # =>  5. Write a program to toggle case of each character of a string.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Enter Your Name :  ', content => {
    let final = "";

    for (let i = 0; i < content.length; i++) {
        let contentUpdate = content.toString().charAt(i);

        if (contentUpdate == contentUpdate.toLocaleLowerCase()) {
            final += contentUpdate.toLocaleUpperCase();
        }

        else if (contentUpdate == contentUpdate.toLocaleUpperCase()) {
            final += contentUpdate.toLocaleLowerCase();
        }

        else {
            final += contentUpdate;
        }
    }
    console.log(final);
    readline.close();
});