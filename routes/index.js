var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

router.get('/', function(req, res, next) {
	Todo.find(function(err, tds, count){
		if(err) return next(err);
		res.render('index', { title: 'Todo List', todos:tds });
	});
});

module.exports = router;
