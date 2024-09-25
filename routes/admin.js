const Router = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

adminRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body
    try {
        await adminModel.create({
            email : email,
            password : password,
            firstName : firstName,
            lastName : lastName
        })
        res.json({ msg : "User signed up" })
    } catch (error) {
        res.json({ msg : "User already exists" })
    }
})

adminRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({
        email : email,
        password : password
    })
    if(admin){
        const token = jwt.sign({
            id : admin._id
        }, JWT_ADMIN_PASSWORD)
        res.json({ tokken : token })
    } else{
        res.status(403).json({ msg : "Incorrect Credentials" })
    }
})

// adminRouter.use(adminMiddleware); // this admin middleware will make sure that the user is logged in. It will give rights only to the admin to make changes onto the website viz creating/changing s.

adminRouter.post("/course", adminMiddleware, async function (req, res) { // the course endpoint should be protected by the admin
// middleware
    const adminId = req.userId // the adminmiddleware will make sure that the admin is logged in and the control will reach
// here and we can say adminID = req.userId
    const { titel, description, price, imageUrl, createrId } = req.body; // these are the five things we expect admin to give us

// TODO: build a pipeline to upload images: from: Youtube video - creating a web3 saas in 6 hours
// so that user is able to upload in image and not give a image url
    const course = await courseModel.create({
        title : title,
        description : description,
        price : price,
        imageUrl : imageUrl,
        createrId : adminId
    })

    res.json({ msg : "Course created", courseId : course._id})
})
// we are putting just / here so that any time any request comes to /api/v1/course/.."/" swit will handle it

adminRouter.put("/", function (req, res) { // to make changes in the  structure (put request)
    res.json({ msg : "signup endpoint"})
})

adminRouter.get("/bulk", function (req, res) { // to see all the  under one hood
    res.json({ msg : "signup endpoint"})
})

module.exports = {
    adminRouter : adminRouter
}