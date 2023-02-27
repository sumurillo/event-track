const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

router.get('/', function(req, res, next) {
    res.render('home', { title: 'Event Track' });
  });