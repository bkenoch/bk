//var models = require('../models');
var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

router.get('/fullscreen', function(req, res) {
    res.render('fullscreen', { "hello": cool() });
});

module.exports = router;
