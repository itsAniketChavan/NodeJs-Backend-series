const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    worktype: {
      type: String,
      enum: ["customer", "chef", "manager", "waiter"],
      required: true,
    },
    salary: {
      type: Number,
    },
  },
  {
    timeseries: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
