const jwt = require('jsonwebtoken');

exports.requireSigin = async(req, res,next)=>{
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1]
        const user = jwt.verify(token,process.env.JWT_TOKEN)
        req.user=user
        next()
    }
    if(!req.headers.authorization){

        return res.status(400).json({message : "Authorization required"})
    }
 }