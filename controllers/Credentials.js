const express = require("express");
const app = express();
app.use(express.json());
const Buser = require("../Model/buyerSchema.js");
const Suser = require("../Model/sellerSchema.js");

const Bsignup = async (req, res) => {
  const { name, phone, email, password, cpassword } = req.body;
  try {

    if(!(name && phone && email && password && cpassword)){
      res.send("Enter the Credentials")
    }
    else if(password!=cpassword){
      res.send("Password does'nt match")
    }

    const userExist=await Buser.findOne({email})
    if(userExist){
      res.send("User already registered")
    }

    const user = new Buser({ name, phone, email, password, cpassword });
    const registered = await user.save();
    if (registered) {
      res.status(201).json({ success: true });
    }
  } catch (err) {
    console.log(err);
  }
};

const Ssignup = async (req, res) => {
  const { name, sname, slocation, phone, email, password, cpassword } = req.body;
  try {

    if(!(name && sname && slocation && phone && email && password && cpassword)){
      res.send("Enter the Credentials")
    }
    else if(password!=cpassword){
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
    const userExist = await Buser.findOne({ email });
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

exports.Ssignup = Ssignup;
exports.Bsignup = Bsignup;
exports.Blogin = Blogin;
exports.Slogin = Slogin;