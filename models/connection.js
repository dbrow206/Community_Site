const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');
const lodash = require("lodash");

const connections = 
[
{
    id:'1',
    name:'Campus Clean up',
    details:'Volunteer as an individual or bring a group. This is a great way to give back to your UNC Charlotte community, gain service hours or get some exercise walking around campus. Snacks will be provided for volunteers, as well as gloves, bags and litter sticks to get the job done.',
    date:'2021/09/08', 
    startTime:'10:00AM' ,
    endTime:'1:00PM',
    hostName:"Charlotte Investment Club",
    image:"https://localist-images.azureedge.net/photos/31500585125210/huge/e71316296fb95c4c059972487eca368addef5688.jpg",
    topic:'In-Person'
},
{
    id:'2',
    name:'Dog walker', 
    details:'I am looking for someone to walk my dogs. This will take approximately 2 hours and I am located in the charlotte area.',
    date:'2021/09/08', 
    startTime:'11:00AM' ,
    endTime:'1:00PM',
    hostName:"Privite entinity",
    image:"https://dailygazette.com/wp-content/uploads/2019/05/190521b.jpg",
    topic:'In-Person'
    
},
{
    id:'3',
    name:'Save the water Misson', 
    details:'During the save the water misson community service event we will be talking about different ways you can help save the water in your community',
    date:'06no/09/2008', 
    startTime:'11:00AM' ,
    endTime:'1:00PM',
    hostName:"water misson",
    image:"https://image.slidesharecdn.com/watermission-140727074159-phpapp02/95/water-mission-1-638.jpg?cb=1406446968",
    topic:'Online'
},
{
    id:'4',
    name:'Habitat event', 
    details:'By volunteering with your local Habitat for Humanity, you can be a part of the change you want to see in your community. We offer several opportunities to build or repair homes with families, in addition to volunteer work opportunities at your local Habitat ReStore. You can even invite your friends and family to join us.',
    date:'2021/10/08', 
    startTime:'11:00AM' ,
    endTime:'1:00PM',
    hostName:"Habitat For Hummanity",
    image:"https://www.hypcharlotte.org/wp-content/files/sites/6/2020/07/logo-hyp-black.png",
    topic:'In-Person'
},
{
    id:'5',
    name:'POL - Multiple opportunities', 
    details:'Offering a variety of volunteer opportunities is one way to ensure that employees or community members find at least one thing in which they’d feel comfortable participating. Has your organization thought about incorporating virtual activities for your remote staff or supporters?',
    date:'09/09/2008', 
    startTime:'4:00PM' ,
    endTime:'6:00PM',
    hostName:"Points of light",
    image:"https://www.pointsoflight.org/wp-content/themes/points-of-light/assets/img/POL_Logo.png",
    topic:'Online'
},
{
    id:'6',
    name:'Drawing', 
    details:'Color A Smile is a nonprofit organization that distributes cheerful drawings to Senior Citizens, Our Troops Overseas, and anyone in need of a smile. Every month we mail thousands of new drawings to all the people on our mailing list.',
    date:'2021/09/08', 
    startTime:'4:00PM' ,
    endTime:'6:00PM',
    hostName:"JustServe",
    image:"https://www.justserve.org/api/images/5450c835-ae06-4921-82f7-cdb29015f144.png",
    topic:'Online'
}
];

exports.getTopics = () => {
    topics = [];
        for(i=0; i< connections.length;i++){
        if(!topics.includes(connections[i].topic)){
            topics.push(connections[i].topic);
            }
        }
        return topics;
}


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

exports.groupByTopic = function(connections){
    return lodash.groupBy(connections, 'topic');
  
}