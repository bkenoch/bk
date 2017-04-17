var cool = require('cool-ascii-faces');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
      res.render('onepage', 
		{ 
			title: 'onepage'
		}
	);
});

module.exports = router;