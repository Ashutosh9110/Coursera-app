const Router = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");



adminRouter.post("/signup", function (req, res) {
    res.json({ msg : "signup endpoint"})
})

adminRouter.post("/signin", function (req, res) {
    res.json({ msg : "signup endpoint"})
})

// adminRouter.use(adminMiddleware); // this admin middleware will make sure that the user is logged in. It will give rights only to the admin to make changes onto the website viz creating/changing s.

adminRouter.post("/", function (req, res) {
    res.json({ msg : "signup endpoint"})
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