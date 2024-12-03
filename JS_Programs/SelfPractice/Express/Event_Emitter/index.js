const Eventmitter = require('events');
const myemitter = new Eventmitter();

myemitter.on('greet', () => {
    console.log("Good Yaar");
});

myemitter.emit('greet');