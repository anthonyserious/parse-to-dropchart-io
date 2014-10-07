function ParseToDropchartIo() {
  // nothing
};

ParseToDropchartIo.prototype.parseVmstat_Ubuntu = function(inputString) {
  var obj = {};
  var cols = [ 'r', 'b', 'swpd', 'free', 'buff', 'cache', 'si', 'so', 'bi', 'bo', 'in', 'cs', 'us', 'sy', 'id', 'wa', 'st' ];
  var lines = inputString.split("\n");
  var headerRe = /^procs -----------memory----------/;
  var headerRe2 = /buff/; // Good enough???
  var emptyLineRe = /^\s*$/;

  if (headerRe.exec(lines.shift()) === null) { 
    obj.status = "error";
    return obj;
  }

  obj.values = []; // initialize these
  lines.forEach(function(line) {
    var a = headerRe.exec(line);
    var b = headerRe2.exec(line);
    var c = emptyLineRe.exec(line);
    if (a === null && b === null && c === null) {
      var arr = line.trim().split(/\s+/);
      if (arr.length === cols.length) {
        obj.values.push(arr);
      } else {
        obj.status = "error";
        return obj;
      }
    } else { /* ??? */ }
  });
  obj.values.unshift(cols);
  return obj;
}

module.exports = exports = new ParseToDropchartIo();


