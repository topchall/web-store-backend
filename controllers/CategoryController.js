const Category = require('../models/category');

module.exports = {
	index: function(req, res) {
		Category.findAll({}).then((categories => {
			res.locals = { title: 'Categories', username: req.session.username, categories };
			return res.render('categories', { 'message': req.flash('message'), 'error': req.flash('error') });
		})).catch(err => {
			res.locals = { title: 'Categories', username: req.session.username, categories: [] };
			return res.render('categories', { 'message': req.flash('message'), 'error': req.flash('error', err.message) });
		})
	},
  
	create: function(req, res) {
		Category.create({
			categoryName: req.body.categoryName
		  })
		  .then(category => {
			req.flash('message', 'Created Successfully.');
			return res.redirect('/categories');
		  })
		  .catch(err => {
			req.flash('error', err.message);
			return res.redirect('/categories');
		  });
	},
  
	delete: function(req, res) {
		Category.destroy({
			where: {id: req.body.categoryId}
		  })
		.then(() => {
		  res.end();
		})
	}
  }