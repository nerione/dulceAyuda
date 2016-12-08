/*
Website dulce ayuda
version inicial
Author: Nerione
mail: neri5909@gmail.com
*/

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var dulceAyuda = express();

// when on Heroku, port will be exported to an environment variable
// and available as process.env.PORT
var port = process.env.PORT || CONFIG.port;


app.use(bodyParser());
//contenido estatico
app.use(express.static('public'));


app.set('views', './views');
app.set('view engine', 'jade');
app.use('/dulceAyuda', dulceAyuda);
app.use(bodyParser.json());
dulceAyuda.use(express.static('public'));
app.get('/', function(req,res){
	res.render('index',{
	numero:0
	});
});

app.listen(port, function(req, res){
	console.log('\n Aplicación levantada correctamente en el puerto 3030... \n Neri Sánche Lozano \n Version 1.0.0');
});