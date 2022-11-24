const express = require("express");
const app = express();
app.use(express.json());
const body_parser = require("body-parser");
const Buser = require("../Model/buyerSchema.js");
const Suser = require("../Model/sellerSchema.js");
const router = express.Router();
router.use(body_parser.json());
router.use(body_parser.urlencoded({ extended: true }));

const Home = require("../controllers/Home");
const {Ssignup,Bsignup,Blogin,Slogin}=require("../controllers/Credentials")

router.get("/home", Home);

router.post("/bsignup", Bsignup);
router.post("/ssignup", Ssignup);

router.post("/blogin", Blogin);
router.post("/slogin", Slogin);

module.exports = router;
