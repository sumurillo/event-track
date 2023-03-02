const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const eventsCtrl = require('../controllers/events');

//GET create event page /new
router.get('/', function(req, res) {
    res.render('events/new');
  });

//POST create the new event and redirect back to /event
router.post('/event', eventsCtrl.create); 


module.exports = router;