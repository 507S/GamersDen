exports.register = (req, res, next) =>{
    res.send('Register Route');
}

exports.login = (req, res, next) =>{
    res.send('Login Route');
}

exports.forgotPassword = (req, res, next) =>{
    res.send('Forgot password Route');
}

exports.resetPassword = (req, res, next) =>{
    res.send('reset Password Route');
}