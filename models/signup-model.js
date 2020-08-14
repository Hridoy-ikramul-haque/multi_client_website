var db = require('./db');

module.exports = {
	insert: function (user, callback) {
		
			var sql = "insert into admininfo values(?,?,?,?,?,?,?,?,?,?,?)";
			db.execute(sql, [user.fname, user.lname, user.uname, user.password, user.email, user.phone, 'pending', user.fathersName, user.nid, 0, 'unblock'], function (status) {
				if (status) {
					callback(true);
				} else {
					callback(false);
				}
			});
		
}
}