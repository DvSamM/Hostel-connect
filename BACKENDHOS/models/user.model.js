const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now() }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
