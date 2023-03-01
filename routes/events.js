const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

//GET /events
router.get('/', eventsCtrl.index);

 module.exports = router;