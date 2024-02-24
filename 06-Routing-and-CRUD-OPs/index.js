
const express = require('express')
const app = express()
require('dotenv').config()
const {connectDB} = require('./db')
const bodyParser = require('body-parser')
 
connectDB()
app.use(bodyParser.json())



const Person = require('./Routers/personRoute')
app.use('/person', Person)

const Menu = require('./Routers/menuRoutes');
app.use('/menu', Menu)

app.listen(process.env.PORT, ()=>{
    console.log("Server is running : ", process.env.PORT)
})