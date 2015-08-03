var http = require('http');
module.exports = function(server, filesToPrecompile) {
  server.on('listening', function() {
    var address = server.address();
    filesToPrecompile.forEach(function(file) {
      http.request({
        host: address.address,
        port: address.port,
        method: 'GET',
        path: file,
                          //swallow errors
      }).end().on('error', function() {});
    });
  });
}
