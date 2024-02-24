const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const { connectToDB } = require("./Database-Connection/db");
const User = require("./models/user");

connectToDB();

app.get("/", (req, res) => {w
  return res.json("Welcome user");
});

app.post("/user", async (req, res) => {
  try {
    const data = req.body;

    await newUser.save();
    res.status(200).json("data saved");
  } catch (error) {
    console.log(error);
    res.status(500).json("data not saved");
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
