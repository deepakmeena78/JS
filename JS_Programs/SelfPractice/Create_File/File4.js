const fs = require('fs');

fs.copyFile("FileRename.txt", "FileCopy.txt", function (err) {
    if (err) {
        console.log("Error A gai");
    }
    else {
        console.log("Good Yaar");
    }
});
