const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({

    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    worktype:{
        type:String,
        enum :['chef', 'manager', 'waiter'],
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const Person = mongoose.model("Person",personSchema )
 module.exports=Person;