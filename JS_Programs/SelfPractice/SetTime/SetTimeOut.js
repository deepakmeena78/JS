setTimeout(()=> { console.log("its great");
    setTimeout(()=> {console.log("its wonderful");
            setTimeout(() => {console.log("Well organised")},1000)},1000)},1000)

setTimeout(()=>{ console.log("its working");
    setTimeout(()=> { console.log("I am on top of the world");
        setTimeout(()=>{}
        ,1000 )} ,1000) } ,1000 )
        
setTimeout(()=>{console.log("hi i am relaxed");
setTimeout(()=>{console.log("welcome");
  setTimeout(()=>{console.log("are u willing to go")},1000)
},1000)},1000)
 
setTimeout(()=> { console.log("its great");
    setTimeout(()=> {console.log("its wonderful");
            setTimeout(() => {console.log("Well organised")},1000)},1000)},1000)

setTimeout(()=>{ console.log("its working");
    setTimeout(()=> { console.log("I am on top of the world");
        setTimeout(()=>{}
        ,1000 )} ,1000) } ,1000 )
        
setTimeout(()=>{console.log("hi i am relaxed");
setTimeout(()=>{console.log("welcome");  
  setTimeout(()=>{console.log("are u willing to go")},1000)
},1000)},1000)
 
let p=new Promise((resolve, reject)=>{
let isBooked= false;
if (isBooked)
{
  resolve("its great ... u got a confirmed ticket")
}
else
{
  reject("sorry its full")
}})
 
p.then((data)=> {console.log(data)} )
.catch((data)=>{console.log(data)} )
.finally(()=>{console.log("thanks.... continue journey with us")} )

function ticketBooking()
{
return new Promise((resolve, rejected)=>
{let loadWebPage =loadSite()
if (loadWebPage)
{
console.log("Web page is laoded lets try with login")
status =setTimeout((()=>loadLogin()) , 2000)
resovle(status)
}
else
{
reject()
}
} )
}

ticketBooking().then((status)=>console.log("your login status - mostly u r logged in " +status) )
.catch((status)=>console.log("sorry not logged in"))
.finally(()=>console.log("will always support you"))


setTimeout(()=>{ console.log("hai")
setTimeout(()=> {console.log("hello") },1000)} , 4000)

setTimeout(()=>{ console.log("1")
setTimeout(()=> {console.log("2") },1000)} , 2000)


setTimeout(()=>{ console.log("#$%$#")
setTimeout(()=> {console.log("ASDD") },1000)} , 4000)
