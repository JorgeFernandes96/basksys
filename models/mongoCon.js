var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://bdubasket2:1234ocorr@ds211309.mlab.com:11309/basket";

exports.connect = function(call) {
    MongoClient.connect(mongoUrl, function(err, db) {
        if (err) throw err;
        call(db);
    });
}
