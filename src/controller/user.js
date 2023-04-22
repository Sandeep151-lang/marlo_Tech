const User = require('../models/users')
const jwt = require('jsonwebtoken')
//const {pagination} = require('../shared/pagination')

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
    const userExist = await User.findOne({email:req.body.email,has_password:req.body.password})
    try {
        if(userExist){
            const token = jwt.sign({_id:userExist._id},process.env.JWT_TOKEN,{expiresIn : '1h'});
            if(token){
                return res.status(200).send({message:"Login Successfull",token,user:userExist})
            }
            if(!token){
                return res.status(400).send({message : "Token has expired"})
            }
        }
        if(!userExist){
            return res.status(400).send({message:"Invalid Credential"})
        }
    } catch (error) {
        logger.error("Error - ", error)
    throw new Error(error)
        // return res.status(400).send({message: error})
    }
 }


//update for users
exports.userUpdate = async(req,res)=>{
    try{
        const updateUser = await User.findByIdAndUpdate({_id : req.params._id},{$set : {...req.body}})
        console.log(updateUser)
       return res.status(200).send({message : "Update successfully",updateUser})
    }catch {
        return res.status(400).json({message :"Error"})
    }
}


exports.getProfile=async ( req, res)=>{
    const userExist =await User.findOne({email:req.body.email});
    try {
        if(userExist){
            return res.status(200).send({ userExist})
        }
    } catch (error) {
        return res.status(400).send({message : "Something went wrong"})
    }
}

exports.details=async(req,res)=>{
    
    try {
     
        const count_data =await  User.paginate({"firstName":{$regex:req.body.query.firstName || "",$options:"i"}},req.body.options)
        
        return res.status(200).send(count_data)
        // const product_data =await  User.find({"firstName":{$regex:req.body.search || "",$options:"i"}}).skip(skip).limit(limit)
        //  const count_data =await  User.count()
         
        //  const lastPage = Math.ceil(count_data/limit)  
        //  const next = lastPage===req.body.page ? false : true 
        //  const prev = page === 1 ? false : true 
        //  const totalPages = lastPage
       // return res.status(200).send({message:"Users find",paginator:{curPage:page,itmCount:count_data,hasNext:next,hasPrev:prev,totalPages:totalPages},data : product_data,})
    } catch (error) {
        return res.status(400).json({message:"Users not found"})
    }
}