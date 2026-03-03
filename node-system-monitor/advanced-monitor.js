var osutils = require('os-utils');

console.log("Platform: " + osutils.platform());
osutils.cpuUsage(function (v) {
    console.log("CPU Usage (%): " + v);
});
console.log("Free Memory (%): " + osutils.freememPercentage());



