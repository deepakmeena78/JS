const fs = require('fs');

fs.rename("FileCreate.txt", "FileRename.txt", function (err) {
    if (err) {
        console.log("Error A gai");
    }
    else {
        console.log("Good Yaar");
    }
});