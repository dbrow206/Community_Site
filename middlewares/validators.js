const {validationResult} = require('express-validator');
const {body} = require('express-validator');

exports.validateId = (req, res, next)=>{
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid connection id');
        err.status = 400;
        return next(err);
}else{
    return next();
}

};

exports.validateRsvp = [body('rsvp').isIn(['YES', 'NO', 'MAYBE'])];

exports.validateSignUp =
[body('firstName', 'First name cannot be empty').notEmpty().trim().escape(),
body('lastName', 'Last name cannot be empty').notEmpty().trim().escape(),
body('email', 'Eamil must be a valid email address').isEmail().trim().escape().normalizeEmail(),
body('password', 'Password must be between 8-64 chars').isLength({min: 8, max:64})];


exports.validateLogin = [body('email', 'Eamil must be a valid email address').isEmail().trim().escape().normalizeEmail(),
body('password', 'Password must be between 8-64 chars').isLength({min: 8, max:64})];

exports.validateConnection = 
[
body("name", 'Name cannot be empty').notEmpty().trim().escape(),
body("date", 'date cannot be empty').notEmpty().trim().escape(),
body("hostName", 'Host Name cannot be empty').notEmpty().trim().escape(),
body("topic", 'Topic cannot be empty').notEmpty().trim().escape(),
body("image", 'Image URL cannot be empty').notEmpty().trim().escape(),
body("details", "Details must be at least 10 chars").notEmpty().isLength({min: 10}).trim().escape(),

]

exports.validateResult = (req,res,next)=>{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        errors.array().forEach(error => {
            req.flash('error', error.msg);
        });
        return res.redirect('back');
    }else {
        return next();
    }
    };