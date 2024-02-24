
const express = require('express')
const app = express()
require('dotenv').config()
 

const data = [
    {
        id:1010,
        name:"aniket"
    },

    {
        id:1011,
        name:"sahil"
    }
]

// When we have to convert normal data into JSON data.
// Then we have to use JSON.stringify method and pass the data to it.
 
const normalTojson = JSON.stringify(data)
console.log(normalTojson)


// when we have to convert JSON data to normal data.
// we have to use parse method and pass data to it.

const jsonToNormal = JSON.parse(normalTojson)
console.log(jsonToNormal)

 
app.listen((process.env.PORT), () => {
    console.log("Server is running on port 4000");
})
