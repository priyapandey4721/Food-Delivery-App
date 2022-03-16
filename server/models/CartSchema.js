const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    Price:{
        type:Number,
        required: true
    },
    Quantity:{
        type: Number,
        required: true
    },
    Checkout:{
        type: Boolean,
        required: true
    },
})
module.exports = mongoose.model("cart", cartSchema);