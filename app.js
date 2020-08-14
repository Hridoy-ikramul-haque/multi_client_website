//declaration
var express = require('express');
var login = require('./controllers/login');

var logout = require('./controllers/logout');
var signup = require('./controllers/signup');
var admin = require('./controllers/admin');

var expressSession = require('express-session');


var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();


//configuration
app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

app.use('/img', express.static('img'));


//middleware 
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(expressSession({secret: 'my secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());

//app.use(bodyParser());

app.use('/login', login);
app.use('/signup', signup);
app.use('/home', login);
app.use('/admin', admin);

//app.use('/logout', logout);


//routes
app.get('/', function (req, res) {
	res.render('index');
});

//server startup
app.listen(3000, function () {
	console.log('node server started at 3000!');
});