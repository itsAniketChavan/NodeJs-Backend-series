const mongoose = require('mongoose')

DB_URI = process.env.DB_URI

 
 async function connectToDB ()  {

    try {
        await mongoose.connect(DB_URI)
        console.log("DataBase Connected")
    } catch (error) {
        console.log("Database connection Failed", error)
    }
     

}

module.exports ={connectToDB}

