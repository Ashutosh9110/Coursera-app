require("dotenv").config(); // this needs to be put at the top of the file.
console.log(process.env.MONGO_URL)
const express = require("express")
const mongoose = require("mongoose")
// const { createUserRoutes } = require("./routes/user");
// const { createCourseRoutes } = require("./routes/course");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin")
// const jwt = require("jsonwebtoken")
const app = express();


//MIDDLEWARE

// To avoid user calling admin endpoints, we keep admin and user password different. Therefore, we will have different middleware for admin and user

app.use(express.json()); // this middleware is needed whenever the user want to send a request with json data..
// whenever user is sending a request with some data and if we want to parse that body, that will only happen if we have the express.json middleware
const port = 3000;


app.use("/api/v1/user", userRouter); // all the routes that start with /user are getting handled by userRouter ..
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

// above way is more clearer way of writing the code than the below one. The benefit of above aproach is that most backend are written in this format only

// another benefit is that, we can write routes with version mentioned in the path..and in future if there is another version then we can name that version in the route "/api/v1/users"... all the prefixing of the backend routes can be done here


// createUserRoutes(app); // this function is calling under the hood app.post, app.get from user.js 
// createCourseRoutes(app);


// before we are connecting via app.listen..we should await mongoose.connect and only once connection is bridged, we should
// start to listen at 3000.

async function main(){

    await mongoose.connect(process.env.MONGO_URL) // this is what we write to replace the keys/passwords
    app.listen(port, () => {console.log(`Server running at PORT: ${port}`)})
    console.log("Listening on port 3000")
}

main() // calling the main function

//