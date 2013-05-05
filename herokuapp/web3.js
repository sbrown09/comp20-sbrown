//Connect to database

// Express initialization
var express = require('express');
var app = express(express.logger());
app.use(express.bodyParser());
app.set('title', 'nodeapp');

// Mongo initialization
var mongoUri = 'mongodb://admin:12345@dharma.mongohq.com:10010/Trippy';
var mongo = require('mongodb');
var db = mongo.Db.connect(mongoUri, function (error, databaseConnection) {
db = databaseConnection;
}); 
    
app.all('/', function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.all('/add', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.all('/submit.json', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.all('/submit2.json', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });



app.get('/', function(request, response, next) {
//req.query.game_title
//        var gametitle = request.query.game_title;
var newentry = [{"Trip": "Southern Asia", "username": "Kenny", "loca": "Bangkok"}];
db.collection('TripInfo', function(err, collection){
//        TripInfo.insert(newentry);
		if(!err){
                  collection.find().toArray(function(err, TripInfo){
		var Array2 = new Array();
                var i = 0;
                while (TripInfo[i]!= null){
                        Array2[i]= TripInfo[i];
                        i++;}
                        response.send(Array2);
				});
				};
                        });
		});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.get('/add', function(request, response, next) {

var newcombo = [{"username": "Tim", "password": "5678"}];

var name ="Nate";
var password = 1234;
db.collection('Validator', function(err, collection){
	collection.insert(newcombo, {w:0});
                if(!err){
                  collection.find({username: name}).toArray(function(err, Validator){		
		var i=0;	
                while (Validator[i]!= null){
                        if (Validator[i].password == password){
			response.send('true');
				}
                        i++;}
                        response.send('false');
                                });
                                };
                        });

});
//hi
app.post('/submit2.json', function (request, response, next) {

var trip = request.body.trip;
var loca = request.body.loca;
var username = request.body.username;
var text_field = request.body.text_field;

var newentry = [{"trip": trip, "username": username, "loca":loca, "text_field": text_field}];
db.collection('TripInfo', function(er, TripInfo) {
	if(!er){
	TripInfo.insert(newentry);
	}
	});
response.send(newentry);
});

app.post('/submit.json', function(request, response, next) {
var name = request.body.name;
var username = request.body.username;
var password = request.body.password;
var newentry = [{"name":name, "username":username, "password":password}];
db.collection('Validator', function(er, Validator){
        if(!er){
        Validator.insert(newentry);
        }
        });
response.send(newentry);
});

