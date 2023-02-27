const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET users events page
router.get('/', function(req, res, next) {
    res.render('myEvents', { title: 'Event Track' });
    res.send('my events page goes here');
  });

  module.exports = router;