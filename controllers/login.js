var express = require('express');
var router = express.Router();
var managerModel = require.main.require('./models/manager-model');
var adminModel = require.main.require('./models/admin-model');

router.get('/', function (req, res) {
	res.render('login/index');
});
router.get('/passrecover', function (req, res) {
	res.render('login/passrecovery');
});
router.post('/', function (req, res) {
	if (req.body.usertype == "Admin") {
		var user = {
			username: req.body.uname,
			password: req.body.password
		};
		adminModel.validate(user, function (status) {
			if (status) {
				res.cookie('usertype', req.body.usertype);
				res.cookie('uname', req.body.uname);
				res.redirect('/admin');
			} else {
				res.render('login/error');
			}
		});
	} else if (req.body.usertype == "Manager") {
		var user = {
			username: req.body.uname,
			password: req.body.password
		};
		managerModel.validate(user, function (status) {
			if (status) {
				res.cookie('usertype', req.body.usertype);
				res.cookie('uname', req.body.uname);
				res.redirect('/manager');
			} else {
				res.render('login/error');
			}
		});
	} else if (req.body.usertype == "House Provider") {
		var user = {
			username: req.body.uname,
			password: req.body.password
		};
		houseProviderModel.validate(user, function (status) {
			if (status) {
				res.cookie('uname', req.body.uname);
				res.redirect('/houseprovider');
			} else {
				res.render('login/error');
			}
		});
	} else if (req.body.usertype == "Customer") {
		res.render('customer/index');
	} else {
		res.send('invalid username/password');
	}
});
router.post('/passrecover', function (req, res) {
	if (req.body.usertype == "Manager") {
		var user = {
			username: req.body.uname,
			password: req.body.password,
			fathersName: req.body.fathersName
		};
		managerModel.recover(user, function (results) {
			if (results.length > 0) {
				managerModel.passrecovery(user, function (status) {
					if (status) {
						res.redirect('/login');
					} else {
						res.send("error");
					}
				});
			} else {
				res.send('enter valid username');
			}
		});

	}
});

module.exports = router;