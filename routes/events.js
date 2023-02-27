const express = require('express');
const router = express.Router();

const eventsCtrl = require('../controllers/events');

// router.get('/', eventsCtrl.index);

//GET all events page
router.get('/', function(req, res, next) {
    res.render('events/events', { title: 'Event Track' });
    res.send('all events should show here')
  });

  module.exports = router;