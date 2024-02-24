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
    type: {
      type: String,
      enum: ["custmor", "chef", "manager", "waiter"],
      required: true,
    },
    salary: {
      type: String,
    },
  },
  {
    timeseries: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
