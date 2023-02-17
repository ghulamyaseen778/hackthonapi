require("dotenv").config()
const express = require('express') //import express
const mongoose = require('mongoose') //import Mongoose
const cors = require('cors') //import cors
const app = express() //initilaze express
const PORT = process.env.PORT || 5000 //define server port
const route = require('./routes')
const userSchema = require("./Modals/userSchema")
// //make mongodb connection using mongoose
mongoose.connect(process.env.MONGO_DB_URI)
  .then((res) => console.log("Server connected"))
  .catch((err) => console.log("Server disconnected"))


app.use(cors()) //intilaze cors because server or api use in react app
app.use(express.json()) //intilaize express in json
app.use('/api', route)

app.get("/api/token/:id", (req, res) => {
  const id = req.params.id
  console.log(id)
  try {
    userSchema.findById(id , (err, user) => {
      if (err) {
        res.status(404).json({
          data: "Something went wrong"
        })
      } else {
        const { user_name, email, password, mobile_no, joining, _id } = user
        res.status(200).json({
          token: _id,
          userName: user_name,
          email,
          joining,
          mobileNumber: mobile_no
        })
      }
    })
  }
  catch (err) {

  }
})


app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})
