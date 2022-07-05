const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please provide a user name"],
    },
    email:{
        type: String,
        required: [true, "please provide a emaile"],
        unique: true,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "please provide a valid email"
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

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
});

UserSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", UserSchema)

module.exports = User;