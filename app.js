// Events module

const EventEmitter = require("events"); //EventEmitter is a class, contains property and methods.

const Logger = require("./logger");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", arg => {
  //e, eventArg or arg
  console.log("Listener called", arg);
});

logger.log("message");
