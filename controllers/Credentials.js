const express = require("express");
const app = express();
app.use(express.json());
const Buser = require("../Model/buyerSchema.js");
const Suser = require("../Model/sellerSchema.js");
// const jwt=require("jsonwebtoken")

const Bsignup = async (req, res) => {
  const { name, phone, email, password, cpassword } = req.body;

  try {
    if(!(name && phone && email && password && cpassword)){
      res.status(422).json({success:false})
    }
    if(password!=cpassword){
      res.status(422).json({success:false})
    }
    const userExist=await Buser.findOne({email})
    if(userExist){
      res.status(422).json({success:false})
    }
    const user = new Buser(req.body);
    const registered = await user.save();
    if (registered) {
      res.status(201).json({success:"Signed In"})
    }

    // //jwt thing
    // const token=jwt.sign({
    //   user:registered._id
    // },process.env.JWT_SECRET);

    // //send the token in a HTTP_only cookie
    // res.cookie("token",token,{
    //   httpOnly:true,
    // }).send();

  } catch (err) {
    console.error(err)
    res.status(500).send()
  }
};

const Ssignup = async (req, res) => {
  const { name, sname, slocation, phone, email, password, cpassword } = req.body;
  try {

    if(!(name && sname && slocation && phone && email && password && cpassword)){
      res.send("Enter the Credentials")
    }
    if(password!=cpassword){
      res.send("Password does'nt match")
    }
    const userExist=await Suser.findOne({email})
    if(userExist){
      res.send("User already registered")
    }
    const user = new Suser({ name, sname, slocation, phone, email, password, cpassword });
    const registered = await user.save();
      if (registered) {
        res.status(201).json({ success: true });
      }
  } catch (err) {
    console.log(err);
  }
};

const Blogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if(!email && !password){
      res.status(401).json({success:false})
    }
    const userExist = await Buser.findOne({ email });
    if(!userExist){
      res.status(401).json({success:false})
    }
    const passMatch=userExist.password===password
    if(!passMatch){
      res.status(401).json({success:false})
    }
    if (passMatch) {
      res.status(201).json({success:"logged In"})
    }
    // //jwt thing
    // const token=jwt.sign({
    //   user:userExist._id
    // },process.env.JWT_SECRET);
    
    // //send the token in a HTTP_only cookie
    // res.cookie("token",token,{
    //   httpOnly:true,
    // }).send();

  } catch (err) {
    console.log(err);
  }
};

const Slogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await Suser.findOne({ email });
    if (userExist) {
      if (userExist.password === password) {
        res.send("successfull login");
      } else {
        res.send("Invalid Credentials");
      }
    } else {
      res.send("Signup first");
    }
  } catch (err) {
    console.log(err);
  }
};

// const Logout=(req,res)=>{
//   res.cookie("token","",{
//     httpOnly:true,
//     expires:new Date(0),
//   }).send();
// };

exports.Ssignup = Ssignup;
exports.Bsignup = Bsignup;
exports.Blogin = Blogin;
exports.Slogin = Slogin;
// exports.Logout = Logout;