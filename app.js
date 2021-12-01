//Require needed modules 
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require("method-override");
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const connectionRoutes = require("./routes/connectionRoutes");
const userRoutes = require('./routes/userRoutes');


//Create the app
const app = express();

//Set up the app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');


//Connect to database
mongoose.connect('mongodb://localhost:27017/demos', {useNewUrlParser: true, useUnifiedTopology: true} )
.then(()=>{
    app.listen(port,  host, ()=>{
        console.log("Server is running on port", port);
    });
})
.catch(err=>console.log(err.message));

//Middleware

app.use(
    session({
        secret: "ajfeirf90aeu9eroejfoefj",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({mongoUrl: 'mongodb://localhost:27017/demos'}),
        cookie: {maxAge: 60*60*1000}
        })
);
app.use(flash());

app.use((req, res, next) => {
    res.locals.user = req.session.user||null;
    res.locals.errorMessages = req.flash('error');
    res.locals.successMessages = req.flash('success');
    next();
});

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//set up routes
app.get('/', (req,res) =>{ 
    res.render('index');
});

app.get('/about', (req,res)=>{
    res.render('about');
});

app.get('/contact', (req,res)=>{
    res.render('contact');
});

app.use('/connections', connectionRoutes);
app.use('/users', userRoutes);


app.use((req, res, next)=>{
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);

});

app.use((err, req, res, next)=>{
    console.log(err.stack);
    if(!err.status){
        err.status = 500;
        err.message = ('Internal server error');
    }
    res.status(err.status);
    res.render('error', {error:err});
    
});
