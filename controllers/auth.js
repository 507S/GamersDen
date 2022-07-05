const User = require("../models/User")
const ErrorResponse = require("../utils/errorResponse")

exports.register = async (req, res, next) =>{
    const { username, email, password} = req.body;


    try{
        const user = await User.create({
            username, email, password
        });


        sendToken(user,201,res);
    }catch(error){
        // res.status(500).json({
        //     success: false,
        //     error: error.message,
        // })
        next(error);
    }

}

exports.login = async (req, res, next) =>{
    const {email, password} = req.body;

    if(!email || !password){
        // res.status(400).json({
        //     success:false,
        //     error: "please provide email and password"
        // })
        return next(new ErrorResponse("please provide an email and password", 400))
    }

    try{
        const user = await User.findOne({email}).select("+password");

        if(!user){
            // res.status(404).json({
            //     success:false,
            //     error: "Invalid credentials"
            // })
            return next(new ErrorResponse("Invalid credentials",401))
        }

            const isMatch = await user.matchPasswords(password);
            
            if(!isMatch){
                // res.status(404).json({
                //     success: false,
                //     error: "invalid credentials"
                // })
            return next(new ErrorResponse("Invalid credentials", 401))

            }
            sendToken(user,200,res);
            // res.status(200).json({
            //     success:true,
            //     token: "32535235325"
            // })
        
    }catch(error){
        res.status(500).json({
            success:false,
            error: error.message
        });
    }
}

exports.forgotPassword = (req, res, next) =>{
    res.send('Forgot password Route');
}

exports.resetPassword = (req, res, next) =>{
    res.send('reset Password Route');
}


const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({
        success: true,
        token
    })
}