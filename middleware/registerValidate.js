
exports.registerValidate = (req, res, next) => {
    const { name, email, password } = req.body;

    if(req.body && name && email && password){
        next()
    }

    return res.status(400).send('All inputs are required')
}