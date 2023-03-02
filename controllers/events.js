const Event = require('../models/event');

module.exports = {
    index,
    new: newEvent,
    create,
    userEvents,
    update,
    delete: deleteEvent
};

function index(req, res) {
    Event.find({}, function(err, events) {
        res.render('events/events', { events })
    });
}

async function create(req, res){
    console.log(req.body);
    req.body.user = req.user;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    let event = await new Event(req.body);
    await event.save();
    res.redirect('/events')
};

function newEvent(req, res) {
    res.render('/')
};

function userEvents(req, res) {
    Event.find({user: req.user._id}, function(err, events){
        console.log(events);
        res.render('events/myevents', { events })
    });
}

function update(req, res){
    
}

function deleteEvent(req, res) {
    console.log(req.params.id);
    Event.findByIdAndDelete(req.params.id, function(){
        res.redirect('/myevents');
    });
};