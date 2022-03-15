const jwt = require('jsonwebtoken')
const jwtSecret = `${process.env.JWT_SECRET_KEY}`;

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    if(token == null ){
        res.json({msg:"Login is Required"})
    }else{
        jwt.verify(token,jwtSecret,(err,data)=>{
            if(err){
                res.json({err:err.message})
            }else{
                console.log("Token Matched Successfully")
                next();
            }
        })
    }
}
module.exports = authenticateToken;