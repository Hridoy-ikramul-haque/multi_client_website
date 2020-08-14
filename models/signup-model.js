var db = require('./db');

module.exports = {
	insert: function (user, callback) {
		if (user.usertype == "Customer") {
			var sql = "insert into customerinfo values(?,?,?,?,?,?,?,?,?,?,?)";
			db.execute(sql, [user.fname, user.lname, user.username, user.password, user.email, user.phone, 'pending', user.fathersName, user.nid, 0, 'unblock'], function (status) {
				if (status) {
					callback(true);
				} else {
					callback(false);
				}
			});
		} else {
			console.log("select type");
		}
	}
}