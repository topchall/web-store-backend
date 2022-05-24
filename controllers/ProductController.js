const Product = require('../models/product');
const Category = require('../models/category');
const formidable = require('formidable');
const fs = require('fs');
const path = require("path");

module.exports = {
	index: async function(req, res) {
		const products = await Product.findAll({});
		for (let product of products) {
			product.categoryName = (await Category.findByPk(product.categoryId)).categoryName;
		}

		res.locals = { title: 'Products', username: req.session.username, products };
		return res.render('products/index', { 'message': req.flash('message'), 'error': req.flash('error') })
	},

	create: async function(req, res) {
		const categories = await Category.findAll({});
		res.locals = { title: 'Create Product', username: req.session.username, categories };
		return res.render('products/create', { 'message': req.flash('message'), 'error': req.flash('error') });
	},
  
	store: function(req, res) {
		let newpath = '';
		const form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
		  const oldpath = files.imgfile.filepath;
		  newpath = 'public/logos/' + files.imgfile.originalFilename;
		  console.log(`old: ${oldpath} \n new: ${newpath} `)
		  fs.copyFile(oldpath, newpath, function (err) {
			  if (err){
				req.flash('error', err.message)
				return res.redirect('/products/create')
			  }

			  Product.create({
				categoryId: fields.categoryId,
				caption: fields.caption,
				price: fields.price,
				quantity: fields.quantity,
				description: fields.description,
				img: newpath
				})
				.then(async () => {
					req.flash('message', 'Created a product successfully.')
					return res.redirect('/products/create')
				})
				.catch((err => {
					req.flash('error', err.message)
					return res.redirect('/products/create')
				}))
		  });
		});
	},

	edit: async function(req, res){
		const categories = await Category.findAll({});
		const product = await Product.findByPk(req.params.id)
		res.locals = { title: 'Edit Product', username: req.session.username, categories, product };
		return res.render('products/edit', { 'message': req.flash('message'), 'error': req.flash('error') });
	},

	update: function (req, res) {
		let newpath = '';
		const id = req.params.id;
		const form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			if(files.imgfile.originalFilename){
				console.log('===================> uloaded new file');
				const oldpath = files.imgfile.filepath;
				newpath = 'public/logos/' + files.imgfile.originalFilename;
				console.log(`old: ${oldpath} \n new: ${newpath} `)
				fs.copyFile(oldpath, newpath, function (err) {
					if (err){
					  req.flash('error', err.message)
					  return res.redirect(`/products/edit/${id}`);
					}
	  
					Product.update({
					  categoryId: fields.categoryId,
					  caption: fields.caption,
					  price: fields.price,
					  quantity: fields.quantity,
					  description: fields.description,
					  img: newpath
					}, {
					  where: { id: id }
					})
					  .then(num => {
						if (num == 1) {
							req.flash('message', 'Updated a product successfully.')
							return res.redirect(`/products/edit/${id}`);
						} else {
							req.flash('error', 'Failed update.')
							return res.redirect(`/products/edit/${id}`);
						}
					  })
					  .catch(err => {
						req.flash('error', err.message)
						return res.redirect(`/products/edit/${id}`);
					  });
				});
			} else {
				console.log('-----------------> uloaded witout file');
				Product.update({
				  categoryId: fields.categoryId,
				  caption: fields.caption,
				  price: fields.price,
				  quantity: fields.quantity,
				  description: fields.description
				}, {
				  where: { id: id }
				})
				  .then(num => {
					if (num == 1) {
						req.flash('message', 'Updated a product successfully.')
						return res.redirect(`/products/edit/${id}`);
					} else {
						req.flash('error', 'Failed update.')
						return res.redirect(`/products/edit/${id}`);
					}
				  })
				  .catch(err => {
					req.flash('error', err.message)
					return res.redirect(`/products/edit/${id}`);
				  });
			}
		});
		
	},
  
	delete: function(req, res) {
		Product.destroy({
			where: {id: req.body.productId}
		  })
		.then(() => {
		  res.end();
		})
	}
  }