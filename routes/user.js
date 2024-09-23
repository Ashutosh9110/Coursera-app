
// New version (better approach)

// const express = require("express"); 
// const Router = express.Router;

 // can be written either way

const Router =  require("express");
const userRouter = Router();
// if a request comes on /users or on anything, it gets routed to userRouter. userRouter() is a place that handles incoming requests.

userRouter.post("/signup", function (req, res) {
        res.json({ msg : "Signup endpoint" })
    })

    userRouter.post("/signin", function(req, res) {
        res.json({ msg : "Signin Endpoing" })
    })

    userRouter.get("/purchases", function(res, res) {
        res.json({ msg : "This is it" })
    })


module.exports({
    userRouter : userRouter
})


// older version

// function createUserRoutes(app) {
    


//     app.post("/user/signup", function (req, res) {
//         res.json({msg : "Signup endpoint"})
//     })
    
    
//     app.post("/user/signin", function (err, data) {
//         res.json({ msg : "Signin endpoint"})
//     })
    
//     app.get("/user/purchases", function (err, data) {
//         res.json({ msg : "Welcome"})
//     })
 
// }

// module.exports = {
//     createUserRoutes : createUserRoutes
// }
