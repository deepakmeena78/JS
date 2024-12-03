// const fs = require('fs');

// fs.writeFile("FileCreate.txt", "InfoBeans Foundation Batch-10", function (err) {
//     if (err) {
//         console.log("Error A gai");
//     }
//     else {
//         console.log("Good Yaar");
//     }
// });


const fs = require('fs');

let content = "InfoBeans Foundation Batch-10";

fs.writeFile("FileCreate.txt", content, function (err) {
    if (err) {
        console.log("Error A gai");
    }
    else {
        console.log("Good Yaar");
    }
});
