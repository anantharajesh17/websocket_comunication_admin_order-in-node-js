const express = require('express');
app = express();
require('dotenv').config();
app.use(express.json())
port = process.env.port;
const mongoose = require('./connection/mongoose');
const router = require('./routes/route');
app.use('/reg', router);

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
});