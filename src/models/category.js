const mongoose = require('mongoose') 
const mongoosePaginate = require('mongoose-paginate-v2');



const categorySchema = new mongoose.Schema({
    Slug : {
        type:String,
        required:true,
    },
    CategoryName : {
        type:String,
        required:true,
    },
    canDel:{
        type:Boolean,
        default:true,
        alias: 'canDelete'
      },
      
    isActive : {type:Boolean,default:true},
    isDefault : {type:Boolean,default:false},
    deletedAt: {type:Date},
    createdBy: {type: mongoose.Schema.Types.ObjectId,ref: "user",},
    updatedBy: [{type: mongoose.Schema.Types.ObjectId,ref: "user"}],
    deletedBy: {type: mongoose.Schema.Types.ObjectId,ref: "user",}

})
categorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("categories",categorySchema)