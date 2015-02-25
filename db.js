// this file will holds all th database connection strings also a test connection function for all databases
module.exports = {
	DatabaseConnectionString1 : "mongodb://sguha-work:wristwatch1988@ds045031.mongolab.com:45031/test_flickpx_db",
	TestConnection1 : function() {
		var MongoClient = require('mongodb').MongoClient;
		MongoClient.connect(this.DatabaseConnectionString1, function(err, db) {
		  if(!err) {
		  	return true;
		  } else {
		  	return false;
		  }
		});
	}
};