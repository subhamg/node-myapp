// Events module

const EventEmitter = require("events"); //EventEmitter is a class, contains property and methods.

const emitter = new EventEmitter(); // Here emitter is a object

// Register a listener
emitter.on("messageLogged", arg => {
  //e, eventArg or arg
  console.log("Listener called", arg);
});

// Raise an event
emitter.emit("messageLogged", { id: 1, url: "http://" });
// id and url are object argument to the emit method.

//Emit means  Making a noise - produce signalling

/* --------- Exercise ----------- */

// Listen to a logging event
emitter.on("logging", arg => {
  console.log("Logging Called", arg);
});
// Raise an logging event
emitter.emit("logging", { data: "message" });
