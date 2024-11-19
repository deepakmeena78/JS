const fs = require('fs');

fs.writeFile("FileCreate.txt", "InfoBeans Foundation Batch-10", function (err) {
    if (err) {
        console.log("Error A gai");
    }
    else {
        console.log("Good Yaar");
    }
});
