const mongoose = require('mongoose') 
const mongoosePaginate = require('mongoose-paginate-v2');

const courseSchema = new mongoose.Schema({
    Slug:{
        type:String,
        required:true,
    },
    courseName : {
        type:String,
        required:true,
    },
    courseImg:{
        type:String,
        required:true,
    },
    coursePrice:{
        type:Number,
        required:true
    },
    category:{type:mongoose.Schema.Types.ObjectId,ref: "categories"},
    isActive : {type:Boolean,default:true},
    isDefault : {type:Boolean,default:false},
    deletedAt: {type:Date},
    createdBy: {type: mongoose.Schema.Types.ObjectId,ref: "user",},
    updatedBy: [{type: mongoose.Schema.Types.ObjectId,ref: "user"}],
    deletedBy: {type: mongoose.Schema.Types.ObjectId,ref: "user",}

},{timestamps:true})

courseSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("course", courseSchema);