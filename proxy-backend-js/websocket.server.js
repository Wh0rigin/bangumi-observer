const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket connected');

  // 发送时间戳给客户端
  setInterval(() => {
    ws.send(JSON.stringify({ timestamp: Date.now() }));
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});