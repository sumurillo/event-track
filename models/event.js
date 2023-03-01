const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    guest: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    userName: String,
    userAvatar: String
});

module.exports = mongoose.model('Events', eventSchema);