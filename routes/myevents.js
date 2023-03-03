const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const eventsCtrl = require('../controllers/events');

router.get('/', eventsCtrl.userEvents);

// router.get('/:id/edit', eventsCtrl.edit);
// router.put('/:_id' eventsCtrl.update);

router.delete('/:id', eventsCtrl.delete);

module.exports = router;