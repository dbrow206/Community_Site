//Require needed modules 
const express = require('express');
const morgan = require('morgan');


//Create the app
const app = express();

//Set up the app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//set up routes
app.get('/', (req,res) =>{ 
    res.render('index');
});


//Start the server
app.listen(port, host, () =>{
    console.log("Server is running on port", port);
});