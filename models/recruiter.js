const mongoose= require('mongoose')
const  {ObjectId} = mongoose.Schema.Types

const recruiterSchema= new mongoose.Schema({
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
    CompanyName:{
        type:String,
        required:true
    },
    Position:{
        type:String,
        required:true
    },
    NumOfPosition:{
        type:Number,
        required:true
    }
})


module.exports = mongoose.model('Recruiter',recruiterSchema)