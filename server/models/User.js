import mongoose from "mongoose";
const { Schema } = mongoose;
import passportLocalMongoose from "passport-local-mongoose";

// Regular expression for validating email format
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema({
    email:{
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [emailRegex, "Please enter a valid email address"]
}
});

userSchema.plugin(passportLocalMongoose);


const User = mongoose.model('User', userSchema);
export default User;