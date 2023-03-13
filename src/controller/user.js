const User = require('../models/users')
const jwt = require('jsonwebtoken')

//singup for users
exports.singUp = async(req,res)=>{
    const userExist = await User.findOne({ email: req.body.email });
    try {
      if (userExist) {
        return res.status(400).send({ message: 'Email already exist' })
      } else {   
        var user_register = await User({ ...req.body});
        await user_register.save();
        return res.status(200).send({ message: 'Registered Successfully'})  
      }
    } catch (error) {
      return res.status(400).send({ message: 'Something went wrong' })
    } 
 }

//signin for users
 exports.singIn = async(req,res)=>{
    const userExist = await User.findOne({email:req.body.email,has_password:req.body.has_password})
    try {
        if(userExist){
            const token = jwt.sign({_id:userExist._id},process.env.JWT_TOKEN,{expiresIn : '1h'});
            if(token){
                return res.status(200).send({message:"Login Successfull",token,data:userExist})
            }
            if(!token){
                return res.status(400).send({message : "Token has expired"})
            }
        }
        if(!userExist){
            return res.status(400).send({message:"Invalid Credential"})
        }
    } catch (error) {
        return res.status(400).send({message: error})
    }
 }


//update for users
exports.userUpdate = async(req,res)=>{
    try{
        const updateUser = await User.findByIdAndUpdate({_id : req.params._id},{$set : {...req.body}})
        console.log(updateUser)
        res.status(200).send({message : "Update successfully",data : updateUser})
    }catch {
        return res.status(400).json({message :"Error"})
    }
}
