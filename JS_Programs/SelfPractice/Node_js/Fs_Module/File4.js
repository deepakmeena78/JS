// const fs = require('fs');

// fs.readFile("FileRename.txt", function (err) {            // async
//     if (err) {
//         console.log("Error A gai");
//     }
//     else {
//         console.log("Good Yaar");
//     }
// });


const fs = require('fs');

const data = fs.readFileSync("FileRename.txt", "UTF-8");  // sync

console.log(data); 3
