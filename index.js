//load in express module
var express = require('express');

//load in body-parser module
var bodyParser = require('body-parser');

//create a new express instance. We'll call is app
var app = express();

//take the information and make it json
app.use(bodyParser());

app.set("view engine", "ejs");

//where the css and other files are located
app.use(express.static('public'));

//when we receive a GET request to the home route, send back the HTML page
app.get('/', function(req, res) {
	res.render('index', { imagePath: "img/cover.jpg"});
});

app.get('/career', function(req, res) {
	res.render('career', { imagePath: "img/career.jpg"});
});

app.get('/adventure', function(req, res) {
	res.render('adventure', { imagePath: "img/image1.jpg"});
});

app.get('/family', function(req, res) {
	res.render('family', { imagePath: "img/image3.jpg"});
});

app.get('/contactMe', function(req, res) {
	res.render('form', { imagePath: "img/image2.jpg", includeBootstrap: true });
});

//here will process the form
app.post('/process-form', function(req, res) {
	//res.end(JSON.stringify(req.body));

	//body-parser attached out form data to req.body object. pull the values off and save into variables
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var email = req.body.email;
	var phone = req.body.phone;
	var message = req.body.message;

	res.send(
		"Thank you for the submission. You entered the following information:" + 
		"<br>Name: " + firstName + " " + lastName +
		"<br>Phone #: " + phone +
		"<br>Email: " + email +
		"<br>Message: " + message
		);
});

app.listen(3000, function(){
	console.log('App is listen on port 3000');
});

