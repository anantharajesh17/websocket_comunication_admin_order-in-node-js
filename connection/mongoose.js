const mongoose = require('mongoose');

mongoose.connect(process.env.connection)
  .then(() => {
    console.log('*************************************************************Connected Success**********************************************************');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

module.exports = mongoose;