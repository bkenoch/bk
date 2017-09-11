var express = require('express');
var router = express.Router();

//https://cdnjs.cloudflare.com/ajax/libs/js-data-firebase/3.0.0/js-data-firebase.min.js

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('weather', { title: 'weather' });
});


router.get('/:code', function(req, res) {
    
        var weather_code = req.params.code;
        //var token = req.params.token; //先不檢查
    
        var json = {
            id: 0,
            weather_code: "",
            msg: "沒有資料",
            err: ""
        }
    
        res.json(json);
    
    });

module.exports = router;
