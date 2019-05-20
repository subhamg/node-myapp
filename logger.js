/* The var url and log function are scope to only this module. 
   They are private, they are not visible outside */

var url = "http://mylogger.io/log"; // Sending http request to this url

function log(message) {
  // Send an HTTP request
  console.log(message);
}

// Adding method called 'log' to exports object and setting it to log function
// module.exports.log = log;

// here we are only exporting one function therefore, we don't need to call a method

module.exports = log;
// Name of method can be anything you like. This will keep the url private.
// module.exports.endPoint = url;
