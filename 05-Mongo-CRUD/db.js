
const mongoose = require('mongoose')

require('dotenv').config()

  async function connectDB(){

    try {

        await mongoose.connect(process.env.DB_URI)
        console.log("MongoDB Connected...")
        
    } catch (error) {
        
        console.log(`DataBase connection Error: ${error}`)
    }
}

module.exports = {connectDB}