const fs = require('fs');

fs.unlink("FileCopy.txt", function (err) {
    if (err) {
        console.log("Error A gai");
    }
    else {
        console.log("Good Yaar");
    }
});
