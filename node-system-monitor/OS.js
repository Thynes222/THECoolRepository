var osutils = require('os-utils');
const os = require('os');
let http = require('http');





function sysinfo(){// Basic system information
    console.log(`OS Platform: ${os.platform()}`);
    console.log(`OS Type: ${os.type()}`);
    console.log(`OS Release: ${os.release()}`);
    console.log(`CPU Architecture: ${os.arch()}`);
    console.log(`Hostname: ${os.hostname()}`);

    // Memory information
    const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
    const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
    console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

    // User information
    const userInfo = os.userInfo();
    console.log(`Current User: ${userInfo.username}`);
    console.log(`Home Directory: ${os.homedir()}`);


}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8002); 


sysinfo();

// document.getElementById("output-area").innerHTML = totalMemGB;
