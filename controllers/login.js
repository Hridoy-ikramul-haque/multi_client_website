var express = require('express');
var adminModel = require.main.require('./models/admin-model');
var router = express.Router();


router.get('/', function (req, res) {
	res.render('login/signin');
});

router.post('/', function (req, res) {
	 
		var user = {
			username: req.body.uname,
			password: req.body.password
		};
		adminModel.validate(user, function (status) {
			if (status) {
				res.cookie('usertype', req.body.usertype);
				res.cookie('uname', req.body.uname);
				console.log(status);
				res.redirect('/admin');
			} else {
				res.send('error');
			}
		})


	});




module.exports = router;