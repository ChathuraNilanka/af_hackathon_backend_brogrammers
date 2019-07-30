const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema =  new Schema({
    eventName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    host:{
        type:Array,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required:true
    },
    pricePerHead:{
        type:Number,
        required:true
    },
    participents:{
        type:Array,
    }, 
    status:{
        type:String,
        default:"active"
    },          
    date:{
      type:Date,
      default: Date.now()
    }
});

module.exports = Event = mongoose.model('events',EventSchema);
