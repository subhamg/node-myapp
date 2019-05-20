// OS module

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`); //Template string
console.log(`Free Memory: ${freeMemory}`);
