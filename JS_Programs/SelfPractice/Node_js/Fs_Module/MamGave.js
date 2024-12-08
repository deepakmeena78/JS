const fs = require("fs")

// fs.readFile("Test.txt","UTF-8" ,(err,data) => { if(err) throw new err
//                                     else
//                                     console.log(data)}
// )

const a = fs.readFileSync("FileCreate.txt", "UTF-8")
console.log(a);

fs.writeFile("Tempary.txt", "new data", function () {
    console.log("done with writting");
});

fs.writeFileSync("FileCreate.txt", "second time update");