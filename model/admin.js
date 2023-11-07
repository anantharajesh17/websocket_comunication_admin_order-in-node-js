const mongoose = require("mongoose");

const adminschema = mongoose.Schema({
    adminName:{
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
        password:{
            type:String,
            Validate:{
                Validate:function(password){
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
                },
                message:"password validation on requried"
            }
        },
        is_Active:{
            type:Boolean,
            default:true
        },
        mobile:{
            type:Number,
            Validate:{
                Validate:function(number){
                    return /^(\+91)[0-9]{10}$/.test(number);
                },
                message:"invalid phone number must start with +91"
            },
            required:[true, 'phone number must required']
        },
        ip_Address:{
            type:String,
            default:'::1'
        },
        country:{
            type:String
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
        otp_time:{
            type:Date,
            default:Date.now()
        },
        otp_verify:{
            type:String,
            default:Date.now()
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Others'],
        },
        orderStatus:{
            type: String,
            enum:['waiting', 'accepted', 'cancel'],
        }
    },
        {
            timestamps:true
        });

const admin = mongoose.model('admin',adminschema);
module.exports = admin;