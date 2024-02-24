const express  = require('express');
const app =  express()
require('dotenv').config()

const data =[
    {
        id : "1010",
        name:"Aniket"
    },
    {
        id:"1010",
        name:'2500'
    }
]
app.get('/', (req, res)=>{

    res.json(data)
})

app.listen(process.env.PORT, ()=>{

    console.log("Serving is running on the port  "+ process.env.PORT)
})














// 
// const express = require('express')
// const app = express()
// require('dotenv').config()
//  
// app.get('/' , (req, res)=>{
// 
//     res.json("Server is running...")
// })
// 
// app.get('/getUsers', (req, res)=>{
// 
//     const users = [ 
//         {
//             "name":"Aniket"
//         },
//         {
//             "name":"Raj"
//         }
//     ]
//     
//     res.json(users)
// })
// 
//  
// 
// app.listen(process.env.PORT, ()=>{
//     console.log(`Server is running on port ${process.env.PORT}`)
// })