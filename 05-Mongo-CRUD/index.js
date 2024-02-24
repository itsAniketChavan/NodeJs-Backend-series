
const express = require('express')
const app = express()
require('dotenv').config()
const {connectDB} = require("./db")
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const user = require('./models/user')

connectDB()
app.get("/", (req, res)=>{

    res.json("Server is working")
})

// creating new user
app.post("/user", async (req, res)=>{

    try {

        const data = req.body

        const  newUser = new user(data)

        await newUser.save()
        res.json('Data saved')

        
    } catch (error) {

        res.json("data not saved")
        
    }
})

// updating users details

app.put("/user", async (req, res) => {
    try {
        const {email} = req.body;
        const userData = await user.findOne({email });
        if (!userData) {
            return res.status(404).send("No User Found");
        }

         const updateUser = await user.findByIdAndUpdate(userData._id, req.body ,{new:true});
         
         // Sending updated user detail to frontend
         res.json(updateUser);
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
})



app.listen(process.env.PORT, (req, res) =>{
    console.log("Server is running on the PORT : ", process.env.PORT)
})