const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        Validate:{
            Validate:function(email){
                return /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);
            },
            message: 'Invalid email address format'
            },
        },
    mobile:{
        type:Number,
        Validate:{
            Validate:function(number){
                return /^(\+91)[0-9]{10}$/.test(number);
            },
            message:"invalid phone number must start with +91"
        },
        // required:[true, 'phone number must required']
    },
    otp:{
        code: {
            type: Number,
        },
        expiresAt: {
            type: Date,
            default:Date.now()
        },
    },
    is_Active:{
        type:Boolean,
        default:true
    },
    otp_verify:{
        type:Date,
        default:Date.now()
    },
    ip_Address:{
        type:String,
        default:"::1"
    }
    },
    {
        timestamps: true,
    });

const User = mongoose.model('User', schema);

module.exports = User;