var express = require('express');
var cool = require('cool-ascii-faces');
var favicon = require('serve-favicon'); //--------add on 161124
var app = express();
var bodyparser = require('body-parser');
var path = require('path');

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyparser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 20
}));
app.use(bodyparser.json({ limit: 1024 * 1024 * 20 }));

//URL位置
var index = require('./routes/index');
//var users  = require('./routes/users');
var account = require('./routes/account');
var profile = require('./routes/profile');
var note = require('./routes/note');
var photo = require('./routes/photo'); //--------add on 161027

var mail = require('./routes/mail'); //---------add on 161030
var member = require('./routes/member'); //---------add on 161107
var calendar = require('./routes/calendar'); //---------add on 161110
var file = require('./routes/file'); //---------add on 161117

var home = require('./routes/home');

//http://stackoverflow.com/questions/24433733/learning-node-express-public-folder-not-working
app.use("/public", express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); //便用EJS模板

//app.use('/', index);
app.use('/home', home);
app.use('/index', index);
app.use('/account', account);
app.use('/profile', profile);
app.use('/note', note);
app.use('/photo', photo);
app.use('/mail', mail);
app.use('/member', member);
app.use('/calendar', calendar);
app.use('/file', file);

//app.use('/home', home);

app.get('/', function(req, res) {
    res.render('index', { "hello": cool() });
});

app.get('/home', function(req, res) {
    res.render('index', { "hello": cool() });
});

app.get('/about', function(req, res) {
    res.render('about', { "hello": cool() });
});

app.get('/sitemap', function(req, res) {
    res.render('sitemap', { "hello": cool() });
});

app.get('/video', function(req, res) {
    res.render('video', { "hello": cool() });
});

app.get('/emmet', function(req, res) {
    res.render('emmet', { "hello": cool() });
});

app.get('/rwd', function(req, res) {
    res.render('rwd', { "hello": cool() });
});

app.get('/signin', function(req, res) {
    res.render('signin', { "hello": cool() });
});

app.get('/fullscreen', function(req, res) {
    res.render('fullscreen', { "hello": cool() });
});










// catch 404 and forward to error handler
app.use(function(err, req, res, next) {

    //console.log('-------catch 404---------');
    res.status(404);
    //next(err);
    //console.log(next(err));
    //res.render('error', {err: err});
    console.log(err);
    res.end();
    //console.log('-------end catch 404---------');

});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {

    console.log('-------error handler---------');
    res.status(err.status || 500);
    res.json({
        msg: err.message,
        err: (app.get('env') === 'development') ? err : {}
    });
    console.log('-------end handler---------');

});

//console.log('hihi');

module.exports = app;
