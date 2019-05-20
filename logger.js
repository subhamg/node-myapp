console.log(__filename);
console.log(__dirname);

var url = "http://mylogger.io/log"; // Sending http request to this url

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports = log;
