var parseToDropchartIo = require("../index.js");
var fs = require("fs");

describe ("Parse vmstat from Ubuntu 14", function() {
  var inputString = fs.readFileSync("vmstat_ubuntu_14.log");
  
  it("should be foo", function() {
    expect(parseToDropchartIo.parseVmstat_Ubuntu(inputString)).toEqual({});
  });
});


