const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email : { type: String, unique: true },
    password : String,
    firstName : String,
    lastName : String,
});

const adminSchema = new Schema({
    email : { type: String, unique: true },
    password : String,
    firstName : String,
    lastName : String,
})

// courseSchema will have a reference: "creatorId field"..to the adminSchema..
// only an admin that has a creator id can create a course in courseSchema
const courseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageUrl : String,
    creatorId : ObjectId
});

const purchaseSchema = new Schema({ // This purchases schema stores a mapping..mapping a user to the course he bought
    userId : ObjectId, // the userId refers to the userSchema
    courseId : ObjectId, // the course id refers to the courseSchema

});

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema      )
const courseModel = mongoose.model("course", courseSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema)


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}
