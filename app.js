const express=require('express')
const app=express()
const PORT=5000

app.use(require("./Routes/Route"))

app.get('/home', (req, res) => {
    res.send('this is my home page')
})

app.get('/signup', (req, res) => {
    res.send('this is my signup page')
})

app.get('/login', (req, res) => {
    res.send('this is my login page')
})

app.listen(PORT,()=>{
    console.log("hello app")
})
