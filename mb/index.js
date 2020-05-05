const mb = require("mountebank");
const settings = require("./settings");
const helloService = require("./hello-service");
const novelService = require('./novel-service');

// https://www.digitalocean.com/community/tutorials/how-to-mock-services-using-mountebank-and-node-js
const mbServerInstance = mb.create({
  port: settings.port,
  pidfile: "../mb.pid",
  logfile: "../mb.log",
  protofile: "../protofile.json",
  ipWhitelist: ["*"],
});

mbServerInstance.then(function() {
  helloService.addService();
  novelService.addService();
});
