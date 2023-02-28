const Event = require('../models/event');

module.exports = {
    index,
    new: newEvent
    //update
    //delete
    //show
};

function index(req, res) {
    Event.find({}, function(err, events) {
        res.render('events/events', { title: 'All Events', events })
    });
}

function newEvent(req, res) {
    res.render('events/new')
}