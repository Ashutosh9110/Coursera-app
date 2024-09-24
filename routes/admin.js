const Router = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");



adminRouter.post("/signup", function (req, res) {
    res.json({ msg : "signup endpoint"})
})

adminRouter.post("/signin", function (req, res) {
    res.json({ msg : "signup endpoint"})
})

// adminRouter.use(adminMiddleware); // this admin middleware will make sure that the user is logged in. It will give rights only to the admin to make changes onto the website viz creating/changing courses.

adminRouter.post("/course", function (req, res) {
    res.json({ msg : "signup endpoint"})
})


adminRouter.put("/course", function (req, res) { // to make changes in the course structure (put request)
    res.json({ msg : "signup endpoint"})
})

adminRouter.get("/course/bulk", function (req, res) { // to see all the course under one hood
    res.json({ msg : "signup endpoint"})
})

module.exports = {
    adminRouter : adminRouter
}