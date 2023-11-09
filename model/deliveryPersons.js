const mongoose = require("mongoose");

const devliveryPersonSchema = mongoose.Schema({
    user_info:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    },
      {
      timestamps:true,
      });
const devliveryPersons = mongoose.model('devlivery', devliveryPersonSchema);

module.exports = devliveryPersons;
