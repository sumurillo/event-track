const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

//GET /events
router.get('/', eventsCtrl.index);

router.get('/:id/edit', eventsCtrl.edit);
router.put('/:id', eventsCtrl.update);

 module.exports = router;