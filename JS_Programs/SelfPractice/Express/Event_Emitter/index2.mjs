import event from "events"
const eventmitter = new event();

let a ;
let num = 0
eventmitter.on("data", () => {
    a = eventmitter.eventNames();
    console.log("Event Listner", a[num]);
    num++;
});

eventmitter.on("finish", () => {
    console.log("Event Listner", a[num]);
    num++;
});

eventmitter.on("end", () => {
    console.log("Event Listner", a[num]);
    num++;
});

eventmitter.on("error", () => {
    console.log("Event Listner", a[num]);
    num++;
});

eventmitter.emit("data");
eventmitter.emit("finish");
eventmitter.emit("end");
eventmitter.emit("error");