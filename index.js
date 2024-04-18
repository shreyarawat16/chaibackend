require('dotenv').config();
const express= require("express");

const app= express();

const port= 8080;

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port : ${port}`);
});
app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.get("/twitter", (req, res)=>{
    res.send("This is your twitter page");
})

app.get("/login", (req, res)=>{
    res.send('<h1> Please login at chai aur code</h1>');
})