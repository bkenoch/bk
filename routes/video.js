//var models = require('../models');
var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

router.get('/video', function(req, res) {
    res.render('video', { "hello": cool() });
});

module.exports = router;
