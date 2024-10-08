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
        res.json({ token : token })
    } else{
        res.status(403).json({ msg : "Incorrect Credentials" })
    }
})

// adminRouter.use(adminMiddleware); // this admin middleware will make sure that the user is logged in. It will give rights only to the admin to make changes onto the website viz creating/changing s.

adminRouter.post("/course", adminMiddleware, async function (req, res) { // the course endpoint should be protected by the admin
// middleware
    const adminId = req.userId // the adminmiddleware will make sure that the admin is logged in and the control will reach
// here and we can say adminID = req.userId

// we have created the above userId in admin middleware

    const { title, description, price, imageUrl } = req.body; // these are the five things we expect admin to give us

// TODO: build a pipeline to upload images: from: Youtube video - creating a web3 saas in 6 hours
// so that user is able to upload in image and not give a image url
    const course = await courseModel.create({
        title : title,
        description : description,
        price : price,
        imageUrl : imageUrl,
        creatorId : adminId
    })

    res.json({ msg : "Course created", courseId : course._id})
})
// we are putting just / here so that any time any request comes to /api/v1/course/.."/" it will handle it

adminRouter.put("/course", adminMiddleware, async function (req, res) {
    const adminId = req.userId
    const { title, description, imageUrl, price, courseId } = req.body;
    const course = await courseModel.updateOne({ //updateOne function expects filters ki kaun si row ko change karna chahte hai hum
    // yaha par hum courseModel.updateOne ko bol rhe hai ki jaha par ye course id hai, waha par update kardo neeche wale elements..(title, description..)
        _id: courseId,
        creatorId: adminId // it is important that the only the orignal person who created the course should only be able to edit it..that is creatorId is important
    },{
        title : title,
        description : description,
        imageUrl : imageUrl,
        price : price
    })

    res.json({
        msg : "Course updated",
        courseId : course._id
    }) // to make changes in the  structure (put request)
})

adminRouter.get("/course/bulk", adminMiddleware, async function (req, res) { // to see all the  under one hood
    const adminId = req.userId
    const courses = await courseModel.find({
        creatorId: adminId
    })
    res.json({ msg : "Course updated",
        courses})
})

module.exports = {
    adminRouter : adminRouter
}