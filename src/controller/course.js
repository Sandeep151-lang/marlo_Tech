const courseSchema = require('../models/course')

exports.createCourse = async(req,res)=>{
    const course = await courseSchema.findOne({Slug:req.body.slug,deletedAt:{$exists: false}})
        try {
            if(course){
                return res.status(400).json({message:"Course already exist"})
            }
         const coursAdd = await courseSchema({...req.body})
         await coursAdd.save();
         return res.status(200).send({ message: 'Course Created Successfully'})            
        } catch (error) {
            return res.status(400).json({message:error})
        }
}
