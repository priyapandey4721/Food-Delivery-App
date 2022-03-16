const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Price:{
        type:Number,
        required:true,
    },
    Image:{
        type:String,
        required:true,
    }
});
module.exports = mongoose.model('Menu',menuSchema);