// 13. Given an array containing numbers from 1 to n with one missing, find the missing
// number 

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
        let temp = num.charAt(i);
        if (temp != " ") {
            arr[j] = temp;
            j++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    for (let i = arr[0]; i < arr.length; i++) {
        if (i != arr[i]) {
            console.log("First Missing : ", i);
            break;
        }
    }
}