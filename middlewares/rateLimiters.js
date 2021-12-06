const rateLimit = require("express-rate-limit");

exports.logInLimiter = rateLimit({
    windowMs: 60 * 100,
    max: 5, 
    //message: "Too many login requests!"
    handler: (req, res, next) => {
        let err = new Error("Too many login requests");
        err.status = 429;
        return next(err);

    }
});