 
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  password:{
    type:string,
    required:true,

  },

  email:{
    type:email,
    required:true
  }
},{timestamps:true});

export const user = mongoose.model("user", userSchema)
