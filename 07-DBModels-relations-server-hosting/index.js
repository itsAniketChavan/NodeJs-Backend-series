const express = require('express')
const app = express()
require('dotenv').config()
const {connectDB }= require('./db')
const  bodyParser = require("body-parser")

connectDB()
app.use(bodyParser.json())

const userroute = require("./routes/userRoute")
app.use('/user', userroute)

const menuRoute = require('./routes/menuRoute')
app.use("/menu", menuRoute)

const reviewRoute = require('./routes/reviewRoute')
app.use('/reviews', reviewRoute)

app.listen(process.env.PORT, ()=>{
    console.log("Server is running on PORT ", process.env.PORT)
})
