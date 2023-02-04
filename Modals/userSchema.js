const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    mobile_no:{
        type:String,
        required:true,
        trim:true,
    },
    joining:{
        type:Date,
        default:Date.now()
    },
})

module.exports = mongoose.model('registration', UserSchema)