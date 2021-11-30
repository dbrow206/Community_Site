const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
    userRsvp: {type: Schema.Types.ObjectId, ref: 'User'},
    connectionRsvp: {type: Schema.Types.ObjectId, ref: 'Connection'}
});

module.exports = mongoose.model('rsvp', rsvpSchema);