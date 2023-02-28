const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const eventsCtrl = require('../controllers/events');

//GET users events page
router.get('/myevents', function(req, res, next) {
    res.render('/events/myevents', { title: 'Event Track' });
  });

  module.exports = router;