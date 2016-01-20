var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');


router.post('/', function(req, res, next) {
	new Todo({
		content: req.body.content,
		update_at:Date.now()
	}).save(function(err, todo, count){
		if(err) {
			console.log('create err:'+err);
		}else{
			console.log('create ok:'+todo._id);
			res.redirect('/');
		}
	});
});
module.exports = router;
