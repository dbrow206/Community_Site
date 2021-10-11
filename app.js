//Require needed modules 
const express = require('express');
const morgan = require('morgan');
const methodOverride = require("method-override");
const connectionRoutes = require("./routes/connectionRoutes");

//Create the app
const app = express();

//Set up the app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//set up routes
app.get('/', (req,res) =>{ 
    res.render('index');
});

app.use('/connections', connectionRoutes);

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

//Start the server
app.listen(port, host, () =>{
    console.log("Server is running on port", port);
});