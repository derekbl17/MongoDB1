const express=require("express")
const app=express()
app.use(express.json())
require("dotenv").config()
const mongoose=require("mongoose")

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connected with mongoose:)")).catch((err)=>console.log(err));



















const PORT=process.env.PORT || 5555
app.listen(PORT,()=>console.log(`server is UP on port: ${PORT}`))