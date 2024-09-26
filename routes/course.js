
const Router = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db");
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async function(req, res){ // user will send a request in this usermiddleware to make a purchase for the course and we will add an entry in the purchases table
    // const { userId, courseId } = req.body;
    const userId = req.userId;
    const courseId = req.body.courseId;

//Todo here..there should be check that the user has actually made the payment and then we will create an entry in the database
    await purchaseModel.create({

        userId,
        courseId
    })
    res.json({ msg : "You have successfully bought the course" });
} )

courseRouter.get("/preview", async function(req, res) { // preview EP should give the user all the courses that currently exist
//We will make this EP unauthenticated as everyone should be able to see the list of courses with or without login || also since we have not put any middleware, anyone can hit this EP
    const courses = await courseModel.find({}) // we are keeping the array empty coz then find will give us all the courses

res.json({ courses }); // we will simply return the course to the user.
})

module.exports = {
    courseRouter : courseRouter
}

// function createCourseRoutes(app) {

    
// app.post("/course/purchase", function (err, data) {
//     res.json({ msg : "Welcome"})
// })

// app.get("/courses/preview", function (err, data) {
//     res.json({ msg : "Welcome"})
// }) 
// }

// module.exports = {
//     createCourseRoutes : createCourseRoutes
// }