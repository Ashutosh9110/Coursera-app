const mongoose = require("mongoose");
console.log("connected to MongoDb")
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect("mongodb+srv://venividivici:weDrGVvFIUh1ZsE0@cluster0.e1dex.mongodb.net/coursera-app")
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email : { type: String, unique: true },
    password : String,
    firstName : String,
    lastNamse : String,
});

const adminSchema = new Schema({
    email : { type: String, unique: true },
    password : String,
    firstName : String,
    lastNamse : String,
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

const purchaseSchema = new Schema({
    userId : ObjectId, // the userId refers to the userSchema
    courseId : ObjectId, // the course id refers to the courseSchema

});

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema      )
const purchaseModel = mongoose.model("purchase", courseSchema)
const courseModel = mongoose.model("course", purchaseSchema)


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}