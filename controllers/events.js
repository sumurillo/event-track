const Event = require('../models/event');

module.exports = {
    index,
    // create,
    //show,
    //delete,
    // update
};

function index(req, res) {
    Event.find({}, function(err, events) {
        res.render('/', { title: 'All Events', events })
    });
}