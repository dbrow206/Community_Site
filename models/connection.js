const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');

const connections = 
[
{
    id:1,
    name:'Campus Clean up', 
    topic:'person',
    details:'This is a campus clean up',
    date:'10/09/2021', 
    startTime:'10:00AM' ,
    endTime:'1:00PM',
    hostName:"Charlotte Investment Club",
    image:"url?"
},
{
    id:2,
    name:'Dog walker', 
    topic:'person',
    details:'I need dog Walker',
    date:'10/15/2021', 
    startTime:'11:00AM' ,
    endTime:'1:00PM',
    hostName:"Prive entinity",
    image:"url?"
},
{
    id:3,
    name:'Save the watter Misson', 
    topic:'online',
    details:'We need to save the water',
    date:'10/21/2021', 
    startTime:'10:00AM' ,
    endTime:'2:00PM',
    hostName:"water misson",
    image:"url?"
}
]