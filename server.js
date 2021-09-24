const express = require("express")
const mongoose = require("mongoose")
const app = express()

const db = require("./config/keys").mongoURI

mongoose.connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.get("/", (req, res) => {
  res.send("Hello word")
})

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})