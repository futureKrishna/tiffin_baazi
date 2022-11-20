const express=require('express')
const router=express.Router()

const Home = require("../controllers/Home");
const Signup = require("../controllers/Signup");
const Login = require("../controllers/Login")

router.get("/home", Home)
router.post("/signup", Signup)
router.post("/login", Login)

module.exports = router