const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const newsRouter = require('./routers/newsRouter')

app.use(cors())
app.use(express.json())
app.use('/news',newsRouter)


app.listen(PORT,(err)=>{
    if (err) return console.log("Not connected")

    console.log(`Server started on ${PORT}`)

})

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI,(err)=>{
    if (err) return console.log("Could not connect")

    console.log("Connected to Db")

})
