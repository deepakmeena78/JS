for (let i = 0; i < 9; i++) {
    let row = "";
    for (let j = 0; j < 9; j++) {
        if (j >= 9 + 1 - i) {
            row += " *";
        }
        else {
            row += " ";
        }
    }
    console.log(row);
}
