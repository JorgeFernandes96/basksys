var MongoCon = require('../models/mongoCon');
const util = require('util');

exports.create = function(equipa,cb) {

    MongoCon.connect(function(db) {
       // console.log(JSON.stringify(db));
        console.log(util.inspect(db,{depth:2}))
        db.collection("equipas").insertOne(
            equipa,
            function(err) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
                cb();
            });
    });
}

exports.get = function(limit,cb) {
    MongoCon.connect(function(db) {
        db.collection("equipas").find({}).sort({$natural:-1}).limit(limit).toArray(function(err, result) {
            if (err) throw err;
            db.close();
            cb(result);
        });
    });
}
