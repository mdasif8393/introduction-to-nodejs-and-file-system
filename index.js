const events = require('events');
const eventEmitter = new events.EventEmitter();

//creating an event handler

const chitkarDibo = () => {
    console.log('oi beta koi tui?? ami darai asi!!');
}

// assign the handler into an event

eventEmitter.on('scream',chitkarDibo).chitkarDibo

//firing the event

eventEmitter.emit('scream')