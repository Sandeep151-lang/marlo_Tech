const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
    },
    lastName :{
        type:String,
        required:true
    },
    middleName : {
        type:String,
    },
    dob:{
        type:Number,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    occupation:{
        type:String,
    },
    company:{
        type:String,
    }
},{timestamps:true})

// userSchema.virtual('password').set(function(password){
//     this.has_password = bcrypt.hashSync(password,10)
// });

// userSchema.methods={
//     authenticate : function(){
//         return bcrypt.compareSync(password,this.has_password)
//     }
// }

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('users',userSchema)


