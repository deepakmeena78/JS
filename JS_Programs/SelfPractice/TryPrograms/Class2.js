class Message{
    f1(){
        console.log("f1 executed....");
    }
    f2(){
        console.log("f2 executed....");
    }
    static greet(){
        console.log("Happy learning....");
    }
}

let obj = new Message();
obj.f1();
obj.f2();
Message.greet();