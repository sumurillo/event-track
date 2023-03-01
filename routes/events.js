const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

//GET all events page
router.get('/', function(req, res, next) {
    res.render('events/events', { title: 'Event Track' });
  });

//GET /events
router.get('/events', eventsCtrl.index);

 module.exports = router;