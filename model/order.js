const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum:['gpay','phonepay','visa'],
        default:'visa',
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending',
    },
    transactionId: {
        type: String,
        // unique: true,
    },
    paymentDate: {
        type: Date,
        default: Date.now,
    },
    orderStatus:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'admin'
    }
},
{
   timestamps:true
});

const order = mongoose.model("order", orderSchema);
module.exports = order;