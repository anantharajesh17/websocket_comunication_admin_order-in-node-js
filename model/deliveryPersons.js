const mongoose = require("mongoose");

const devliveryPersonSchema = mongoose.Schema({
    firstName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    LastName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    mobile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    },
      {
      timestamps:true,
      });
const devliveryPersons = mongoose.model('devlivery', devliveryPersonSchema);

module.exports = devliveryPersons;
