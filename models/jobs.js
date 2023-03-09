const mongoose= require('mongoose')
const {ObjectId}= mongoose.Schema.Types

const jobsSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    startingDate:{
        type:String,
        required:true
    },
    closingDate:{
        type:String,
        required:true
    }

})

module.exports= mongoose.model('Jobs', jobsSchema)