const express = require("express");
const app = express();

const validate = (req,res,next)=>{
    if(req.id < 15){
        console.log("Done");
        next();
    }
    else{
        res.send("");
    }
}

app.listen(3000, (err, data) => {
    if (err) {
        console.log("err.......sorry");
    }
    else {
        console.log("start");
    }
})