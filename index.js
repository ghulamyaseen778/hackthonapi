require("dotenv").config()
const express = require('express') //import express
const mongoose = require('mongoose') //import Mongoose
const cors = require('cors') //import cors
const app = express() //initilaze express
const PORT = process.env.PORT || 5000 //define server port
const route = require('./routes')
// //make mongodb connection using mongoose
mongoose.connect(process.env.MONGO_DB_URI)
  .then((res) => console.log("Server connected"))
  .catch((err) => console.log("Server disconnected"))
    

  app.use(cors()) //intilaze cors because server or api use in react app
app.use(express.json()) //intilaize express in json
app.use('/api',route)


  app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
  })
