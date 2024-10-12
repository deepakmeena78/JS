// 5. Write a function that checks if two strings are anagrams of each other.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter String :  ', str => {
    readline.question('Next String :  ', str2 => {
        compare(str, str2);
        readline.close();
    });
});

function compare(a, b) {
    y = a.split("").sort();
    z = b.split("").sort();
    for (i = 0; i < y.length; i++) {
        if (y.length === z.length) {
            if (y[i] === z[i]) {
                console.log("Anagrams");
                break;
            }
            else {
                console.log("Not Anagrams");
                break;
            }
        }
        else {
            console.log("Not Anagrams");
        }
        break;
    }
}