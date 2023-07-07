exports.loginValidate = (req, res, next) => {
    const { email, password } = req.body;

    if(req.body && email && password){
        next()
    }

    return res.status(400).send('All inputs are required')
}