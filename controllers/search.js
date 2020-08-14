var express = require('express');
var router = express.Router();
var searchModel = require.main.require('./models/search-model');

router.get('/', function (req, res) {
	searchModel.getAllHouse(function (result) {
		res.render('search/index', {
			userlist: result
		});
	});
});

router.get('/:houseid', function (req, res) {
	if (req.cookies['uname'] != null) {
		searchModel.getHouseProfile(req.params.houseid, function (result) {
			res.render('search/houseProfile', {
				user: result
			});

		});
	} else {
		res.render('search/verified');
	}

});
router.post('/', function (req, res) {
	var house = {
		division: req.body.Area,
		area: req.body.output,
		size: req.body.size,
		price: req.body.price
	};
	searchModel.getFilteredHouse(house, function (result) {
		res.render('search/index', {
			userlist: result
		});
	});
});
module.exports = router;