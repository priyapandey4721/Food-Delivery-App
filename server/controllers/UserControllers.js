const userModel = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = `${process.env.JWT_SECRET_KEY}`;
const UserControllers = {
  register: async (req, res) => {
    console.log(req.body);
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    let profile = req.file ? req.file.filename : null;
    const passwordHash = await bcrypt.hash(password, 10);
    let ins = new userModel({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: passwordHash,
      profile: profile,
    });
    const user = await userModel.findOne({ email: email });
    if (user) {
      res.send({ err: "User Already Exixts" });
    } else {
      ins.save((err) => {
        if (err) {
          console.log({ err: "All Fields are Required" });
        } else {
          res.send({ msg: "Registered Successfully" });
        }
      });
    }
  },
  login: async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    const data = await userModel.findOne({email:email});
    if(data){
      const validPassword = await bcrypt.compare(password,data.password);
      if(validPassword){
        let payload = {uid:email};
        const token = jwt.sign(payload,jwtSecret,{expiresIn:360000})
        res.send({msg:"Login Successful",token:token,data:data});
      }else{
        res.send({err:"Password doesn't match"});
      }
    }else{
      res.send({err:"User Not Registered"})
    }
  },
};
module.exports = UserControllers;

