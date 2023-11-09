const user = require('../model/user');
const order = require('../model/order');
const admin = require('../model/admin');
const devliveryPerson = require('../model/deliveryPersons');
const WebSocket = require('ws');
const wss = new WebSocket.Server({port:4001});


const register = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, otp, amount, password, country, gender, adminName, transactionId, orderStatus } = req.body;

    // User registration logic
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(402).json({ message: 'User with this email already exists' });
    }
    const newUser = await user.create({
      firstName, lastName, email, mobile, otp
    });
    const newAdmin = await admin.create({
      password, country, gender, adminName, email, mobile, orderStatus
    });
    const newOrder = await order.create({
      amount, transactionId, user_id: newUser.id, orderStatus:newAdmin
    });

    const devliveryman = await devliveryPerson.create({
      user_info:newUser
    });

    

    wss.on('connection',function connection(ws){
      ws.on('error', console.error);
      ws.send(`welcome websocket client::${newOrder}`);
      ws.send(`welcome to all:: ${newAdmin}`)
  
      ws.on('message', function message(data, isBinary){
          wss.clients.forEach(function each(client){
              if(client.readyState === WebSocket.OPEN){
                  client.send(`welcome to websocket server::${newAdmin}`)
              }
          });
      });
  });

    res.status(200).json({ message: 'User create success', newUser, newOrder, newAdmin, devliveryman});
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { register };
