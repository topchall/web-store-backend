const Category = require('../models/category');
const Product = require('../models/product');

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
		const id = req.body.categoryId;
		Category.destroy({
			where: {id}
		  })
		.then(() => {
			Product.destroy({
				where: {categoryId: id}
			}).then(()=>{
				return res.end()
			}).catch(()=>{
				return res.end(500);
			})
		}).catch(()=>{
			return res.end(500)
		})
	}
  }