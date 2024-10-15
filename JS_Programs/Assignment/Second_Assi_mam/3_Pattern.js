/*           *********
              ******* 
               *****  
                ***   
                 *               */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a Number : ', str => {
    fun(str);
    readline.close();
});

function fun(num) {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= (2*num)-1; j++) {
            if (j >= i && j <= (2*num) - i) {
                process.stdout.write("*");
            }
            else {
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}