const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    orderItems: {
      type: Array,
    },
    orderAmount: {
      type: Number,
      require: true,
    },
    streetName: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    isOrdered: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
