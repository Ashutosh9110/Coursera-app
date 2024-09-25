
// New version (better approach)

// const express = require("express"); 
// const Router = express.Router;

 // can be written either way

const { Router } =  require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

const userRouter = Router();

// if a request comes on /users or on anything, it gets routed to userRouter. userRouter() is a place that handles incoming requests.
    // Todo: adding zod validation || hashing passwords using bcrypt so plaintext password is not stored in the DB
    userRouter.post("/signup", async function (req, res) {
        const {email, password, firstName, lastName } = req.body; // here we are destructuring req.body..the same can also
        // be written as: const email = req.body.email, const password = req.body.password...
        try{
            await userModel.create({
                email : email, // writing email : email, or email, means the same
                password : password,
                firstName : firstName,
                lastName : lastName
            })
            res.json({ msg : "Signup succeeded" })
        } catch (e) {
            res.json({ msg : "User already exists" })
        }
        })


// So this signin endpoint will let the user signin, will return the user a token, if they have put the right credentials
    userRouter.post("/signin", async function(req, res) {
        const { email, password } = req.body;
//TODO : Password hashing
// userModel.findOne will return either the user or undefined..if the credentials doesn't match..it will return an empty array and if it matches, it will return an array with an entry

        const user = await userModel.findOne({ // userModel.find returns a promse and not synchronously gives the data back
// the reason we are using await async is coz database is pretty far in US and this code is running on this machine, so it will take sometime to fetch the request..that is why we have to await on this specific call.
                email : email, // writing email : email, or email, means the same
                password : password,
            })
            if(user){
                const token = jwt.sign({
                    id : user._id
                }, JWT_USER_PASSWORD)
// TODO :  here we need to put cookie based logic
                res.json({
                    token: token // since we are using token based authentication 
                })
            } else {
                res.status(403).json({ msg : "Incorrect credentials"})
    }})



    userRouter.get("/purchases", function(res, res) {
        res.json({ msg : "This is it" })
    })


module.exports = ({
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
