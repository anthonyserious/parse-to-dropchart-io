var parseToDropchartIo = require("./index.js");
var fs = require("fs");

var inputString = fs.readFileSync("test/vmstat_ubuntu_14.log", "utf8");
var obj = parseToDropchartIo.parseVmstat_Ubuntu(inputString);

console.log(JSON.stringify(obj, null, 2));

