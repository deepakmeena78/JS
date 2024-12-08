import fs from 'fs';

fs.appendFile('Text.txt', 'Update New', () => {
    console.log("Successful");
});
