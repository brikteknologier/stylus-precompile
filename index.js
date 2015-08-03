var http = require('http');
module.exports = function(server, filesToPrecompile) {
  server.on('listening', function() {
    var address = server.address();
    filesToPrecompile.forEach(function(file) {
      var request = http.request({
        host: address.address,
        port: address.port,
        method: 'GET',
        path: file
      })
      request.on('error', function() {});
      request.end();
    });
  });
}
