const EventEmitter = require("events"); //EventEmitter is a class, contains property and methods.

var url = "http://mylogger.io/log"; // Sending http request to this url

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
