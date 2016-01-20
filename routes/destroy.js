var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');


router.get('/destroy/:id', function(req, res, next) {
	console.log('ids:'+req.params.id);
	console.log('id:'+req.param.id);
	Todo.findByIdAndRemove(req.params.id, function(err, todo) {
		if(todo){
			console.log('todo:'+todo._id);
			if(err){
				console.log('del-find error id:'+req.params.id);
				return next(err);
			}else{
				console.log('del-find ok id:'+req.params.id);
				res.redirect('/');
			}
		}else{
			console.log('err:'+err);
			next(err);
		}
	});
});

module.exports = router;
