const orderModel = require("../models/OrderSchema");
const orderControllers = {
  placeOrder: async (req, res) => {
    console.log(req.body)
    let email = req.body.email;
    let orderItems = req.body.orderItems;
    let orderAmount = req.body.orderAmount;
    let streetName = req.body.streetName;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;
    let insertOrderDetails = new orderModel({
      email:email,
      orderItems:orderItems,
      orderAmount:orderAmount,
      streetName:streetName,
      city:city,
      state:state,
      country:country,
      isOrdered:true,
    })
    insertOrderDetails.save((err)=>{
      if(err){
        res.send({err:"Something Went Wrong"})
      }else{
        res.send({msg:"Order Placed Successfully"})
      }
    })
  },
  getOrders:async(req,res)=>{
    let email = req.params.email;
    orderModel.find({email:email},(err,data)=>{
      if(err) res.json({err:err})
      res.json({user:data});
    })

  }
};
module.exports = orderControllers;
