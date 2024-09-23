
const router = require("express");
const userRouter = Router();

userRouter.post("/purchase", function(req, res){
    res.json({ msg : "Welcome" });
} )

userRouter.get("/preview", function(req, res) {
    res.json({ msg : "Welcome" });
})

module.exports = {
    userRouter : userRouter
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