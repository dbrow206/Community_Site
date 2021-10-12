const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');

const connections = 
[
{
    id:'1',
    name:'Campus Clean up', 
    topic:'person',
    details:'This is a campus clean up',
    date:'2021/09/08', 
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
    date:'2021/09/08', 
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
    date:'2021/09/08', 
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
    connections.push(connection);

}

exports.updateById = function(id, newConnection){
    let connection = connections.find(connection=>connection.id === id);
    if(connection){
        connection.name = newConnection.name;
        connection.topic = newConnection.topic;
        connection.details = newConnection.details;
        connection.startTime = newConnection.startTime;
        connection.endTime = newConnection.endTime;
        connection.hostName = newConnection.hostName;
        connection.image = newConnection.image;
        connection.id = newConnection.id;
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