const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [ "user", "seller" ],
        default: "user"
    }
}, { timestamps: true });

const User = mongoose.model("user", userSchema);

module.exports = User;