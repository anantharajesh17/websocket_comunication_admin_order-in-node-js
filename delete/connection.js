// const WebSocket = require('ws');
// const http = require('http');

// const server = http.createServer((_req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('WebSocket server is running');
// });

// const wss = new WebSocket.Server({ server });
// const clients = new Set();

// wss.on('connection', (ws) => {
//   clients.add(ws);

//   ws.on('message', (message) => {
//     // Handle messages from WebSocket clients if needed
//   });

//   ws.on('close', () => {
//     clients.delete(ws);
//   });
// });

// const port = 4000;
// server.listen(port, () => {
//   console.log(`WebSocket server is running on port ${port}`);
// });
