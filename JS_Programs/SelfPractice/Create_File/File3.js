const fs = require('fs');

fs.appendFile("FileRename.txt", " : I am Deepak Meena Has a Student", function (err) {
    if (err) {
        console.log("Error A gai");
    }
    else {
        console.log("Good Yaar");
    }
});
