//var models = require('../models');
var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

router.get('/about', function(req, res) {
    res.render('about', { "hello": cool() });
});

module.exports = router;
