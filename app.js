 //npm= node packet manager.
// third party module,core module  require korar time e ./ dea lagena.
// system by default node module khuje if ./ dewa na hoi. 


//require express and take a application instant called app 


//core module
var express = require('express');
var bodyParser = require('body-parser');
var expressSession = require('express-session');



//custom module 
var home =  require('./controllers/house');
var login =  require('./controllers/login');
var logout =  require('./controllers/logout');
var admin = require('./controller/admin');


var app =  express();

//configuration 

app.set('view engine', 'ejs');




//ROUTING 
// app.get('/',function(req,res){
//       console.log(req);
//       res.send('welcome ,ha bhai');
// });

// app.get('/home',function(req,res){
//       // res.send('bsay aso');
//       var data ={
//             name : 'hridoy',
//             id   : '132' 
//       };
//       res.render('home',data);

// });


//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'my secret value', saveUninitialized:true, resave: false}));
app.use('/login',login);
app.use('/logout',logout);
app.use('/house',house);
app.use('/admin', admin);

app.get('/',function(req,res){
      res.send("welcome home! <br> <a href = '/login'> login</a> ");


});


// app.listen(3000,function(){
//       console.log('express server starts at 3000');
// });


// server starup on port 3000
// evaveo lika jai
app.listen(3000,()=>{
      console.log('server starup on port 3000');
});