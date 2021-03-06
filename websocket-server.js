const WebSocket = require('ws');

// Set up server
const wss = new WebSocket.Server({ port: 8080 });

// Wire up some logic for the connection event (when a client connects) 
wss.on('connection', function connection(ws) {

  // Wire up logic for the message event (when a client sends something)
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('' +message)
  });

  ws.on('close', function() {
    console.log('Client disconnected');
  });

  // Send a message
  ws.send('Hello client!');

  console.log('One more client connected')
});



