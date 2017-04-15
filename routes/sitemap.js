//var models = require('../models');
var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

router.get('/sitemap', function(req, res) {
    res.render('sitemap', { "hello": cool() });
});

module.exports = router;
