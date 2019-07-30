const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const functionsSchema =  new Schema({
    functionName:{
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
    date:{
      type:Date,
      default: Date.now()
    }
});

module.exports = Functions = mongoose.model('functions',functionsSchema);