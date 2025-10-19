const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Application')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Employee");

app.post('/Signin',(req,res) => {
     EmployeeModel.create(req.body)
     .then(employees => res.json(employees))
     .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is running")
})