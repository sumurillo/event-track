const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const eventsCtrl = require('../controllers/events');

// //GET creating new event page
// router.get('/', function(req, res, next) {
//     res.render('events/new', { title: 'Event Track' });
//   });

router.get('/'. eventsCtrl.new); 

  module.exports = router;