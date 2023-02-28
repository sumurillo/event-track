const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const eventsCtrl = require('../controllers/events');

//GET creating new event page
router.get('/', function(req, res, next) {
    res.render('new', { title: 'Event Track' });
    res.send('create events page');
  });

  module.exports = router;