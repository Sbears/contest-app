var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', indexController.index);
app.get('/view/:videoTitle', indexController.view);

app.get('/submit', indexController.submit);
app.post('/formSubmit', indexController.formSubmit);

console.log("Hello");

var server = app.listen(4798, function() {
	console.log('Express server listening on port ' + server.address().port);
});
