const mongoose= require('mongoose')
const {ObjectId}= mongoose.Schema.Types

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    appliedJobs:[{
        type:ObjectId,
        ref:'User'
    }],
    notAppliedJobs:[{
        type:ObjectId,
        ref:'User'
    }]
})

module.exports= mongoose.model('User', userSchema)