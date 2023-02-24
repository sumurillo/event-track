var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/movies', // change path later
    failureRedirect: '/movies'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    //change path later
    res.redirect('/movies')
  });
});

module.exports = router;
