var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/visited';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

app.get('/countries', function(req,res) {
  // Connection URL
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('countries');
    collection.find({}).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
});

app.post('/countries', function(req,res) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('countries'); 
    collection.insert(
      { "country": req.body }
    );
    res.status(200).end();
    db.close();
  });
});

app.delete('/countries', function(req,res) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('countries'); 
    console.log("country name :", req.body.country.name);
    collection.remove( 
      { "name" : req.body.country.name }
    );
    res.status(204).end();
    db.close();
  })
});


app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Visited listening at http://%s:%s', host, port);
});