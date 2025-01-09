

const express=require('express')
const path=require('path')
const app=express();

    app.use(express.static("public"))
    app.get('/home',(req,res)=>
        {
            res.sendFile(path.join(__dirname,'demo.html'));
           // res.sendFile(path.join(__dirname,'public','demo.html'));

        })
    app.get('/about',(req,res)=>
            {
                res.sendFile(path.join(__dirname,'logo.png'));
               // res.sendFile(path.join(__dirname,'public','logo.png'));
    
            })
               
    app.listen(3000,(err,data)=>
        {
                if(err)
                    console.log("err.............. sorry")
                else
                    console.log("started at 3000")
        })
        
        