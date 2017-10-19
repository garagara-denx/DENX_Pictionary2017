var clientPort = 3000;
var hostPort = 3100;
var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

// Client側のHTTPサーバーを構築
var clientServer = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(fs.readFileSync(__dirname + '/client.html', 'utf-8'));
}).listen(clientPort);

// Host側のHTTPサーバーを構築
var hostServer = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(fs.readFileSync(__dirname + '/host.html', 'utf-8'));
}).listen(hostPort);

// それぞれのHTTPサーバにsocketを紐付け
var clientIO = socketio.listen(clientServer);
var hostIO = socketio.listen(hostServer);

// connectionイベントの中身を定義
clientIO.sockets.on('connection', function(socket) {
  socket.on('client_to_server', function(data) {
    hostIO.sockets.emit('server_to_client', {
      value: data.value
    });
  });
});
