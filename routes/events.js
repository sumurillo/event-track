const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');


//GET all events page
router.get('/', function(req, res, next) {
    res.render('events', { title: 'Event Track' });
    res.send('all events should show here')
  });

  module.exports = router;