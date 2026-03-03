var osutils = require('os-utils');
const os = require('os');



console.log("Platform: " + os.platform());
console.log("CPU Cores: " + os.cpus().length);
console.log("Total Memory (MB): " + os.totalmem() / (1024 * 1024));
console.log("Free Memory (MB): " + os.freemem() / (1024 * 1024));
console.log("System Uptime (seconds): " + os.uptime());

console.log("Process Uptime (seconds): " + process.uptime());
console.log("Process Memory Usage: ", process.memoryUsage());
