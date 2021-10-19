const { body, validationResult } = require('express-validator');

function login(req,res,next){

    body('username').isEmail().normalizeEmail(),
    body('password').isLength({
        min: 6
    })

    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    res.status(400).json({
        errors: errors.array()
    });
}

module.exports = {
    login
}
