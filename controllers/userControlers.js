const User=require("../Models/User.js")

//@Create
const createUser=async(req,res)=>{
    if(!req.body.firstname || !req.body.email)res.status(404).send("Not found");
    const user=new User({
        firstname: req.body.firstname,
        email: req.body.email
    })
    const result=await user.save()
    res.status(200).send(result)
};

//@Get all get("/users")
const getAllUsers=async(req,res)=>{
    const usersFromDB=await User.find()
    if(!usersFromDB)return res.status(404).send("Not found");
    res.status(200).send(usersFromDB) 
}

//@Get by id get("/users:id")
const getUserByID=async (req,res)=>{
    const userById=await User.findById(req.params.id)
    if(!userById)return res.status(404).send("Not found");
    res.status(200).send(userById) 
}

//@Put put("/users:id")
const updateUser=async(req,res)=>{
    const userById=await User.findById(req.params.id)
    if(!userById)return res.status(404).send("Not found");
    userById.firstname=req.body.firstname
    const result=await userById.save()
    res.status(200).send(userById) 
}
//@Delete user by id delete("/users:id")
const deleteUser=async(req,res)=>{
    const userById=await User.findByIdAndDelete(req.params.id)
    //if(!userById)return res.status(404).send("Not found");
    res.status(200).send("user Deleted")
}
module.exports={createUser,getAllUsers,getUserByID,updateUser,deleteUser}   