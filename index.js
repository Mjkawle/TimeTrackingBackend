const express = require("express")
const mongoose = require("mongoose")

const roleController = require("./controller/role-controller")


const app = express()
//middle ware
app.use(express.json()) //mobile -? accpet json data from request and SET DATA INTO BODY
app.use(express.urlencoded({extended:true})) //web --> accpet url encoded data from request and set data into body


//database
mongoose.connect('mongodb://localhost:27017/TimeTracking',function(err){
    if(err){
        console.log("db Connection Failed......")
        console.log(err)
    }
    else{
        console.log("Database Connected")
    }
})

//urls
app.get("/",function(req,res){
    res.write("You are welcome... Good")
    res.end()
})



//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
// app.delete("/roles/:roleId",roleController.deletRole)


//server
app.listen(3001,function(){
    console.log("Server started at Localhost:3001 port")
})