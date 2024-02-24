const mongoose = require("mongoose");

const useSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
  }
});

const user = mongoose.model("User", useSchema);
module.exports = user;

