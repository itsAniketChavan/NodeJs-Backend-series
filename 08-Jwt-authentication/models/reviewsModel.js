const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({

    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",

    },
    experince:{
        type:String,
        enum:['good', 'bad'],
        required:true

    },
    ratings:{
        type:Number,
        required:true
    }
})

const  Review=mongoose.model("Review",reviewSchema)
module.exports=Review;