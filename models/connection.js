const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');

const connections = 
[
{
    id:'1',
    name:'Campus Clean up', 
    topic:'person',
    details:'This is a campus clean up',
    date:'10/09/2021', 
    startTime:'10:00AM' ,
    endTime:'1:00PM',
    hostName:"Charlotte Investment Club",
    image:"https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png"
},
{
    id:'2',
    name:'Dog walker', 
    topic:'person',
    details:'I need dog Walker',
    date:'10/15/2021', 
    startTime:'11:00AM' ,
    endTime:'1:00PM',
    hostName:"Prive entinity",
    image:"https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png"
},
{
    id:'3',
    name:'Save the watter Misson', 
    topic:'online',
    details:'We need to save the water',
    date:'10/21/2021', 
    startTime:'10:00AM' ,
    endTime:'2:00PM',
    hostName:"water misson",
    image:"https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png"
}
];

exports.find= function(){
    return connections;
}

exports.findById = id => connections.find(connection=>connection.id === id);

exports.save = function (connection){
    connection.id = uuidv4();
    connection.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    connections.push(connection);

}

exports.updateById = function(id, newConnection){
    let connection = connections.find(connection=>connection.id === id);
if(connection){
    connection.name = connection.name;
    connection.details = connection.details;
    return true;
}else{
    return false;
}
}

exports.deleteById = function(id){
    let index = connections.findIndex(connection =>connection.id ===id);  
    if(index !==-1){
        connections.splice(index, 1);
        return true;
    }else{
        return false;
    }
}