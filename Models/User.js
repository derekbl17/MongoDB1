const mongoose=require("mongoose")
const userSchema= new mongoose.Schema({
    firstname: {type:String, required:[true, "First name field cant be empty"]},
    email:{type:String,required:[true, "Email field cant be empty"],unique:true},

})

module.exports=mongoose.model("User", userSchema)