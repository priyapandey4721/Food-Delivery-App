const menuModel = require("../models/MenuSchema");
const cartModel = require("../models/CartSchema")
const menuControllers = {
  getMenu:  (req, res) => {
     menuModel.find({},(err,products)=>{
      if(err){
        res.json({err:err.message})
      }else{
        res.json({products:products})
      }
    });
  },
  getcart: (req,res)=>{
    let item = req.params.item;
    let email = req.params.email;
    let price = req.params.price;
    cartModel.find({Name :item ,email:email ,Checkout: false},(err,data)=>{
      if(err) {res.json({err:err})}
      if(data.length===0){
        let insert_cart = new cartModel([{Name :item,email:email,Price:price,Quantity:1,Checkout:false}]);
        insert_cart.save((err)=>{
          if(err) {res.json({err:err})};
          res.json({msg:"Your Food is Added"})
        })
      }
      else{
        cartModel.updateOne([{Name:item},{$inc:{Quantity: +1}}],(err)=>{
          if(err) throw err;
          res.json({msg : "Your Food Item is Increased "})
        })
      }
    })
  },
};
module.exports = menuControllers;
