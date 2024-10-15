// 14. Write a function to move all zeros in an array to the end while maintaining the order
// of non-zero elements.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
readline.question('Enter Array Number : ', str => {
    fun(str);
    readline.close();
});

let j = 0;
function fun(num) {
    for (let i = 0; i < num.length; i++) {
        let char = num.charAt(i);
        if (char != " ") {
            arr[j] = char;
            j++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] == 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    let ai = "";
    for (let i = 0; i < arr.length; i++) {
        ai = ai +" "+arr[i];
    }
    console.log("Zero :=>  ",ai);
}