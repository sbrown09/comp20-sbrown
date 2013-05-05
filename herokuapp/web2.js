//Connect to database

// Express initialization
var express = require('express');
var app = express(express.logger());
app.use(express.bodyParser());
app.set('title', 'nodeapp');
app.set('views', __dirname + '/views');
//app.use(express.static('../public/'));
//app.engine('.html', require('ejs').renderFile);


// Mongo initialization
var mongoUri = process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL ||  
  'mongodb://admin:12345@dharma.mongohq.com:10010/Trippy';
var mongo = require('mongodb');
var db = mongo.Db.connect(mongoUri, function (error, databaseConnection) {
db = databaseConnection;
}); 

app.use(express.static(__dirname + '../../public'));

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


app.get('/', function(request,response, next) {
  response.render('login.html'); 
});


app.get('/login.html', function(request,response, next) {
  response.render('login.html'); 
});

app.get('/index.html', function(request,response, next) {
  response.render('index.html'); 
});

app.get('/signup.html', function(request,response, next) {
  response.render('signup.html'); 
});


app.get('/database', function(request, response, next) {
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
	var name = request.body.name;
	var username = request.body.username;
	var password = request.body.password;
	var post = [{"name":name, "username":username, "password":password}];
	console.log(db);
	db.collection('Validator', function(er,users){
		if(!er){
			users.insert(post);
		}
	});
	response.send(post);
});


app.all('/index', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/index', function (request, response, next) {
	db.collection('users', function(er, collection) {
		if(!er){
			collection.find().toArray(function(err,users){
				response.send(users);
			});
		};
	});
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


app.listen(process.env.PORT || 5000);
