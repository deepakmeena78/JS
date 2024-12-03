import fs from 'fs';

fs.writeFile('Text.txt', 'new Data New =>', () => {
    console.log("Successful");
});
