require("dotenv").config()
const express = require('express') //import express
const mongoose = require('mongoose') //import Mongoose
const cors = require('cors') //import cors
const app = express() //initilaze express
const PORT = process.env.PORT || 5000 //define server port
const route = require('./routes')
// //make mongodb connection using mongoose
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

app.use(express.json()) //intilaize express in json
app.use(cors()) //intilaze cors because server or api use in react app
app.use('/api',route)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
  })
})
