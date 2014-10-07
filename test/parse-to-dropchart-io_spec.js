var parseToDropchartIo = require("../index.js");
var fs = require("fs");
var _ = require("lodash");

describe ("Test succcessful parsing of baseline formats", function() {
  //  'vmstat 5' from Ubuntu 14
  var inputString = fs.readFileSync("vmstat_ubuntu_14.log", "utf8");
  var comparisonObj = JSON.parse(fs.readFileSync("vmstat_ubuntu_14.log.json", "utf8"));
  it("vmstat from Ubuntu 14", function() {
    expect(_.isEqual(comparisonObj, parseToDropchartIo.parseVmstat_Ubuntu(inputString))).toEqual(true);
  });
});


