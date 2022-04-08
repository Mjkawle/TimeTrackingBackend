const fs = require("fs")
const UserModel = require("../model/user-model")

function login(req,res){
    res.write("Login")
    res.end()
}

function signup(req,res){
    let signupHtml = fs.readFileSync("./views/Signup.html")
    res.write(signupHtml)
    res.end()
}

function saveUser(req,res){

    console.log(req.body)//

    res.json({
        msg:"done danadone....",
        status:200,
        data:req.body
    })
}

 function sendOtpForPassword(req,res){
        let emailParam  = req.body.email 
        UserModel.find({email:emailParam},function(err,data){
            if(err){
                res.json({status:-1,msg:"SMW",data:err})
            }else{
                if(data.length != 0){
                    let myotp = parseInt(Math.random()*1000000)
                    UserModel.updateOne({email:emailParam},{otp:myotp},function(err,success){
                        res.json({status:200,msg:"otp sent to your email",data:""})
                    })           

                }else{
                    res.json({status:-1,msg:"Invalid Email",data:err})
                }
            }
        })            
 }


module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveUser  
module.exports.sendOtpForPassword = sendOtpForPassword