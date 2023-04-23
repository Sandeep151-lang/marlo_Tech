const categorySchema = require('../models/category')

exports.createCategory = async(req,res)=>{
    const course = await categorySchema.findOne({Slug:req.body.slug,deletedAt:{$exists: false}})
        try {
            if(course){
                return res.status(400).json({message:"Course already exist"})
            }
         const categoryAdd = await categorySchema({...req.body})
         await categoryAdd.save();
         return res.status(200).send({ message: 'Course Created Successfully'})            
        } catch (error) {
            return res.status(400).json({message:error})
        }
}


exports.categoryList= async(req,res)=>{
    try {
        //const categoryList = await categorySchema.paginate({"CategoryName":{$regex:req.body.query.CategoryName || "",$options:"i"}},req.body.options)
        const categoryList = await categorySchema.paginate({},req.body.options)
        res.status(200).send(categoryList)
    } catch (error) {
        res.status(400).send({message:"category not found"})
    }
}

exports.categoryUpdate= async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
