const connection = require('../models/connection');

//check for guest
exports.isGuest = (req, res, next)=>{
    if(!req.session.user){
        return next();
    }else{
        req.flash('error', 'You are logged in already');
        return res.redirect('/users/profile');
    }

};


//check for user
exports.isLoggedIn = (req, res, next)=>{
    if(req.session.user){
        return next();
    }else{
        req.flash('error', 'You need to login');
        return res.redirect('/users/login');
    }

};


//check if user is hostName
exports.isAuthor = (req, res, next)=>{
   let id = req.params.id;
   connection.findById(id)
   .then(connection=>{
        if(connection){
            if(connection.hostName == req.session.user){
                return next();
            }else{
                let err = new Error('Unauthroized to access the resource');
                err.status = 401;
                return next(err);
            }
        }
   })
   .catch(err=>next(err));
};