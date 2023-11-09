const WebSocket = require('ws');
const controller = require('../controller/usereController');
const wss = new WebSocket.Server({port:4001});
//server side send message
wss.on('connection',function connection(ws){
    ws.on('error', console.error);
    ws.send(`welcome websocket client::${controller.register}`)

    ws.on('message', function message(data, isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(`welcome to websocket server::${controller.register}`)
            }
        });
    });
});

