const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// //GET creating new event page
// router.get('/', function(req, res) {
//     res.render('events/new', { title: 'Event' });
//   });

//GET /events/new
router.get('/new', eventsCtrl.new); 
//POST /events/new
router.post('/event', eventsCtrl.create); 


module.exports = router;