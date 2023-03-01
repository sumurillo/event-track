const Event = require('../models/event');

module.exports = {
    index,
    new: newEvent,
    create
    //update
    //delete
    //show
};

function index(req, res) {
    Event.find({}, function(err, events) {
        console.log(events)
        res.render('events/events', { title: 'All Events', events: events })
    });
}

async function create(req, res){
    console.log(req.body);
    req.body.createdBy = req.user;
    let event = await new Event(req.body);
    await event.save();
    res.redirect('/events')
};

function newEvent(req, res) {
    res.render('/')
};
