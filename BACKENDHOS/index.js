const express = require('express');
const app = express();
const port = 1000;
const userRouter = require("./routes/user.route")
const cors = require("cors")
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose")


app.use(express.urlencoded({extended:true, limit:"100mb"}))
app.use(express.json())
app.use(cors())
app.use("/user",userRouter)
require("dotenv").config()
const URI = process.env.MONGO_DB_URI
mongoose.connect(URI)


.then(()=>{
    console.log("MongoDB Connected");
})
.catch((err)=>{
    console.log(err);
})


app.get('/', (req, res) => {
    res.send('Hello')
})
  
  app.listen(port, () => {
    console.log(`node is running on ${port}`)
  })
