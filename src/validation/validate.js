const joi = require('joi');

const singUpValidation = (req,res,next)=>{
    const schema = joi.object().keys({
        firstName : joi.string().required('First Name is required'),
        lastName : joi.string().required('Last Name is required'),
        middleName:joi.string().optional(),
        email:joi.string().email().required('Email is required.'),
        has_password: joi.string().min(6).required('Password is required. '),
        confirmPassword: joi.string().valid(joi.ref('has_password')).required('Password not match'),
        dob:joi.date().raw().optional(),
        occupation:joi.string().optional(),
        company:joi.string().optional(),
    }).unknown(false)

    const {error} = schema.validate(req.body,{abortEarly:false})
    
    if(error){
        res.status(400).json({message:error.details.map((item)=>item?.message)})
    }else{
        next();
    }
    
    // next()
}

const singInValidation = (req,res,next)=>{
    const schema = joi.object().keys({
        email:joi.string().email().required('Email is required.'),
        password: joi.string().required('Password is required. '),
    }).unknown(false)

    const {error} = schema.validate(req.body,{abortEarly:false})
    
    if(error){
        res.status(400).json({message:error.details.map((item)=>item?.message)})
    }else{
        next();
    }
    // next()
}



module.exports = {
    singUpValidation,
    singInValidation
};