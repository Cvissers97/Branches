// routes_v1.js
var express = require('express');
var routes = express.Router();

module.exports = {}

var myObject = {
	mijntekst: 'Hello World!'
};

routes.get('/hello', function (req, res) {
	res.status(200);
	res.json(myObject);
});

routes.get('/check', function (req, res) {
	res.status(200);
	res.json({'Status:' : 200});
});

routes.post('/hello', function (req, res) {
	var body = req.body;

	console.dir(body);

	res.status(200);
	res.json(myObject);

});

routes.get('/hello/error', function (req, res, next) {
	next('HIER TREEDT EEN ERROR OP');
});


routes.get('/hello/*', function (req, res, next) {
	res.status(404);
	res.json({
		message: 'Deze endpoint bestaat nog niet'
	});
	res.end();
});

module.exports = routes;