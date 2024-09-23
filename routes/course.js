
const Router = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res){
    res.json({ msg : "Welcome" });
} )

courseRouter.get("/preview", function(req, res) {
    res.json({ msg : "Welcome" });
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