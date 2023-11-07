// const WebSocket = require('ws');
// const controller = require('../controller/usereController');
// const conn = require('../connection')
// const ws = new WebSocket('ws://localhost:4000');

// ws.on('open',()=>{
//     const adminData = controller.newAdmin();
//     ws.send(JSON.stringify(adminData));
//     ws.send('update sucessfully')
// })
// ws.on(`message`,(message)=>{
//     console.log(`recived from server ${message}`)
// })