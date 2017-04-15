var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');

router.get('/home', function(req, res) {
    res.render('/index', { "hello": cool() });
});

module.exports = router;
