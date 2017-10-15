var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

// Client側のサーバーを構築
var clientServer = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
}).listen(3000);

var io = socketio.listen(clientServer);

io.sockets.on('connection', function(socket) {
  socket.on('client_to_server', function(data) {
    io.sockets.emit('server_to_client', {
      value: data.value
    });
  });
});

// Host側のサーバーを構築
var hostServer = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(fs.readFileSync(__dirname + '/host.html', 'utf-8'));
}).listen(3100);

var hostIO = socket.listen(hostServer);

io.socket.on('connection', function(socket) {

})
