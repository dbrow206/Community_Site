const model = require('../models/connection');  

exports.index=(req, res, next)=>{ 
    model.find()
    .then(connections=> {
    let topics = model.getTopics(connections);
    res.render('./connection/index', {connections:connections, topics:topics})
    })
    .catch(err=>next(err));
      
    };

exports.new=(req, res) => {
    res.render('./connection/newConnection');
};

exports.create = (req, res, next)=>{
    let connection = new model(req.body);
    connection.hostName = req.session.user;
    connection.save()
    .then(connection=> res.redirect('/connections'))
    .catch(err=>{
        if(err.name === 'ValidationError' ) {
            err.status = 400;
        }
        next(err);
    });
    
};

exports.show = (req, res, next)=>{
    let id = req.params.id;
    model.findById(id).populate('hostName', 'firstName lastName')
    .then(connection=>{
        if(connection) {    
            console.log(connection);      
            return res.render('./connection/connectionShow', {connection});
        } else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=>next(err));
};


exports.edit = (req, res, next)=>{
    let id = req.params.id;

    model.findById(id)
    .then(connection=>{
        if(connection) {
            return res.render('./connection/edit', {stconnectionory});
        } else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=>next(err));
};


exports.update = (req, res, next)=>{
    let connection = req.body;
    let id = req.params.id;

    model.findByIdAndUpdate(id, connection, {useFindAndModify: false, runValidators: true})
    .then(connection=>{
        if(connection) {
            res.redirect('/connections/'+id);
        } else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=> {
        if(err.name === 'ValidationError')
            err.status = 400;
        next(err);
    });
};

    
exports.delete = (req, res, next)=>{
    let id = req.params.id;

    model.findByIdAndDelete(id, {useFindAndModify: false})
    .then(connection =>{
        if(connection) {
            res.redirect('/connections');
        } else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err=>next(err));
};
    

