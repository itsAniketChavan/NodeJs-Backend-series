
const express = require('express')
const app = express()
require('dotenv').config()
 
app.get('/' , (req, res)=>{

    res.json("Server is running...")
})

app.get('/getUsers', (req, res)=>{

    const users = [ 
        {
            "name":"Aniket"
        },
        {
            "name":"Raj"
        }
    ]
    
    res.json(users)
})

 

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})