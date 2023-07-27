import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  profilePic: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
