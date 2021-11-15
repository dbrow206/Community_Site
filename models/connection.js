const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    name: {type: String, required: [true, 'name is required']},
    details: {type: String, required:[true, 'details is requried']},
    date:{type: String, required: [true, 'date is required']},
    startTime: {type: String, required: [true, 'startTime is required']},
    endTime: {type: String, required: [true, 'endTime is required']},
    hostName: {type: String, required: [true, 'hostName is required']},
    image: {type: String, required: [true, 'image is required']},
    topic: {type: String, required: [true, 'topic is required']}
},
{timestamps: true}
);

connectionSchema.statics.getTopics = (connecctions) => {
    topics = [];
        for(i=0; i< connecctions.length;i++){
        if(!topics.includes(connecctions[i].topic)){
            topics.push(connecctions[i].topic);
            }
        }
        return topics;
}
//Collection name will be stories in the db
module.exports = mongoose.model('Connection', connectionSchema);



