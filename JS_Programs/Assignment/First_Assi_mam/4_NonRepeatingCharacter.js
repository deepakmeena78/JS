// 6. Find the length of the longest substring without repeating characters.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter String: ', str => {
    const result = NonRepeat(str);
    if (result) {
        console.log(`First No Repeating Character: ${result}`);
    } else {
        console.log("No No Found.");
    }
    readline.close();
});

function NonRepeat(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}
