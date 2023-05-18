var http = require('http');
var fs = require('fs'); // fs - file system module

// fs.readfile, reads files on the computer

http.createServer(function (req, res) {
  fs.readFile('selections.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);