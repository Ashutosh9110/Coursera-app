const express = require("express")
const mongoose = require("mongoose")
// const { createUserRoutes } = require("./routes/user");
// const { createCourseRoutes } = require("./routes/course");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin")
// const jwt = require("jsonwebtoken")
const app = express();
const port = 3000;


app.use("/api/v1/user", userRouter); // all the routes that start with /user are getting handled by userRouter ..
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

// above way is more clearer way of writing the code than the below one. The benefit of above aproach is that most backend are written in this format only

// another benefit is that, we can write routes with version mentioned in the path..and in future if there is another version then we can name that version in the route "/api/v1/users"... all the prefixing of the backend routes can be done here


// createUserRoutes(app); // this function is calling under the hood app.post, app.get from user.js 
// createCourseRoutes(app);


app.listen(port, () => {console.log(`Server running at PORT: ${port}`)})