const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")


const app = express()
//middle ware 
app.use(cors())
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/TimeTracking',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls 

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login) //dummy 
app.get("/signup",sessionController.signup) //dummy
app.post("/sendotpforpassword",sessionController.sendOtpForPassword)

//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)
app.get("/roles/:roleId",roleController.getRoleById)



//user 
app.post("/users",userController.addUser) //customer vendor admin 
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.post("/login",userController.login)

app.post("/savecustomer",userController.addCustomer) //signup  -- customer 



//server 
app.listen(3000,function(){
  console.log("server started on 3000");  
})