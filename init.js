// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://sguha-work:wristwatch1988@ds045031.mongolab.com:45031/test_flickpx_db", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});