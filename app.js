// Events module

const EventEmitter = require("events"); //EventEmitter is a class, contains property and methods.

const emitter = new EventEmitter(); // Here emitter is a object

// Register a listener
emitter.on("messageLogged", function() {
  console.log("Listener called");
});

// Raise an event
emitter.emit("messageLogged");

//Emit means  Making a noise - produce signalling
