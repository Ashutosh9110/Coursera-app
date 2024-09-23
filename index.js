const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const app = express()
const port = 3000;

app.post("/user/signup", function (req, res) {
    res.json({msg : "Signup endpoint"})
})


app.post("/user/signin", function (err, data) {
    res.json({ msg : "Signin endpoint"})
})

app.get("/user/purchases", function (err, data) {
    res.json({ msg : "Welcome"})
})

app.post("/course/purchase", function (err, data) {
    res.json({ msg : "Welcome"})
})

app.get("/courses", function (err, data) {
    res.json({ msg : "Welcome"})
})


app.listen(port, () => {console.log(`Server running at PORT: ${port}`)})