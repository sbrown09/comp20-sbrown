// Express initialization

var express = require('express');
var app = express(express.logger());
app.use(express.bodyParser());
app.set('title', 'nodeapp');

// Mongo initialization
var mongoUri = process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://sbrown:sbrown@dharma.mongohq.com:10033/Sammy';
var mongo = require('mongodb');
var db = mongo.Db.connect(mongoUri, function (error, databaseConnection) {
	db = databaseConnection;
});

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function(request, response, next) {
	db.collection('highscores', function(err, collection) {
		if(!err) {
		
			collection.find().toArray(function(err,highscores){
			response.send(highscores);
			});

		};	
	});
});

app.all('/highscores.json', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
 
 app.get('/highscores.json', function(request, response, next) {
	db.collection('highscores', function(err, collection) {
		if(!err) {
			var game = request.query.game_title;
			collection.find({game_title:game}).toArray(function(err,highscores){
			highscores.sort(function(a,b){
				if(parseInt(a["score"]) == parseInt(b["score"])){
					return 0;
				}
				if(parseInt(a["score"]) < parseInt(b["score"])){
					return 1;
				}
				if(parseInt(a["score"]) > parseInt(b["score"])){
					return -1;
				}
			});
			var ten = [];
			for(i=0;i<10;i++){
				if(highscores[i] != null){
					ten[i] = highscores[i];
				}
			}
			response.send(ten);
			});

		};	
	});
	/*
		db.collection('NAME_OF_YOUR_COLLECTON_HERE...', function(er, collection) {
			collection.find()...
	*/
});
 

app.all('/submit.json', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
 
app.post('/submit.json', function(request, response, next) {
	var game_title = request.body.game_title;
	var username = request.body.username;
	var score = request.body.score;
	var created_at = request.body.created_at;
	var post = [{"game_title":game_title, "username":username, "score":score, "created_at":created_at}];
	console.log(db);
	db.collection('highscores', function(er,highscores){
		if(!er){
			highscores.insert(post);
		}
	});
	response.send(post);
});

app.all('/usersearch', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/usersearch', function (request, response, next) {
response.send("<script>function changelink(){x=document.getElementById('input');window.location='http://arcane-sierra-9351.herokuapp.com/usersearched?username='+x.value;};</script><body><label>Enter a Username</label><input type='text' id='input'/><button onclick='changelink()'>Submit</button></body>");

});

app.get('/usersearched', function (request, response, next) {
	searched_username = request.query.username;
	db.collection('highscores', function(er, collection) {
		if(!er){
			response.set('Content-Type','text/json');
			collection.find({"username": searched_username}).toArray(function(err, highscores){
				response.send(highscores);
			});
		}
	});
});


app.listen(process.env.PORT || 3000);
