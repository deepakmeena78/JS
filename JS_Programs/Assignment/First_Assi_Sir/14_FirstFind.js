const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Find Content :: ', content => {
    readline.question('Enter Find Character :: ', find => {

        let contentupdate = content.toString();
        let findupdate = find.toString();
        for (let i = 0; i < contentupdate.length; i++) {
            let temp = contentupdate.charAt(i);
            if (temp == findupdate) {
                console.log(`index `, i);
                break;
            }
        }
        readline.close();
    });
});