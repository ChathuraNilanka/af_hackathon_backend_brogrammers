const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    type:{
        type:String,
        default:"traveler"
    }
});

module.exports = User = mongoose.model('users',UserSchema);