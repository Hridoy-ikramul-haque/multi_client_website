var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var signupModel = require.main.require('./models/signup-model');

router.get('/', function (req, res) {
	var user = {
		fname: null,
		lname: null,
		uname: null,
		password: null,
		fathersName: null,
		email: null,
		phone: null,
		nid: null,
		password: null
	};
	var error = user;
	res.render('signup/index', {
		user: user,
		error: error
	});
});

router.post('/', function(req,res){
	
	
	const error = validationResult(req);
	var user = {
		fname: req.body.fname,
		lname: req.body.lname,
		uname: req.body.uname,
		usertype: req.body.usertype,
		password: req.body.password,
		fathersName: req.body.fathersName,
		email: req.body.email,
		phone: req.body.phone,
		nid: req.body.nid
	};
	if (error.isEmpty()) {
		signupModel.insert(user, function (status) {
			if (status) {
				res.render('signup/success');
			} else {
				res.render('signup/index', {
					user: user,
					error: error.mapped()
				});

			}
		});
	} else {
		res.render('signup/index', {
			user: user,
			titile: "sigup details",
			error: error.mapped()
		});
	}
});
	

module.exports = router;