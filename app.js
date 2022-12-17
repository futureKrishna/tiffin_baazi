const express = require("express");
const app = express();
const conn = require("./Model/dbconnection.js");
require("dotenv").config();

const PORT = 5000;

//accept json
app.use(express.json())

//accept body
app.use(express.urlencoded({extended:true}))

app.use(require("./Routes/Route.js"));

app.get("/home",(req, res) => {
  res.send("this is my home page");
});

app.post("/bsignup", (req, res) => {
  res.send("this is my buyer signup page");
});

app.post("/ssignup", (req, res) => {
  res.send("this is my seller signup page");
});

app.get("/slogin", (req, res) => {
  res.send("this is my seller login page");
});

app.get("/blogin", (req, res) => {
  res.send("this is my buyer login page");
});

app.listen(PORT, () => {
  console.log(`running at port ${PORT}`);
});
