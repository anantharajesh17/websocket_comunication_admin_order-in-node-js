const WebSocket = require('ws');
const controller = require('../controller/usereController');
const server = new WebSocket.Server({port:4001});
server.on('connection',(ws)=>{
    console.log('new client connected!!!');
//send welcome msg
const resorder = JSON.stringify(controller.register()) 
ws.send(`hello this is welcome msssg  ${controller.register.newOrder.id}`);
console.log(resorder,'jhj')
//replay
ws.on('message',(message)=>{
    ws.send(`your message:${message}`);
    console.log(message);
    const resadmin = JSON.stringify(controller.register.newAdmin.id)
    if(message ==="hai"){
        ws.send(resadmin);
        console.log(resadmin,'ji')
    }else if(message ==="bye"){
        ws.send("good bye");
    }else{
        ws.send("other message")
    } 
});
})