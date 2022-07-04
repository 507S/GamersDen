const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please provide a user name"],
        unique: true,
        match: [
            /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, "please provide a valid email"
        ]
    },
    password:{
        type: String,
        required: [true, "please add a password"],
        minlength: 6,
        select : false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

const User = mongoose.model("User", UserSchema)

module.exports = User;