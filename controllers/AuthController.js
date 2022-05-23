const bcrypt = require('bcrypt')
const Admin = require('../models/admin');

module.exports = function (app) {

	app.get('/login', function (req, res) {
		res.render('Auth/auth-login', { 'message': req.flash('message'), 'error': req.flash('error') });
	});

	app.post('/post-login', 
	// urlencodeParser,
	 function (req, res) {
		Admin.findOne({
			where: {
			  email: req.body.email
			}
		  })
			.then(user => {
			  if (!user) {
				req.flash('error', 'User Not found.');
				return res.redirect('/login');
			  }
			  var passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			  );
			  if (!passwordIsValid) {
				req.flash('error', 'Invalid Password!');
				return res.redirect('/login');
			  }
			  req.session.authenticated = true;
			  req.session.username = user.name;
			  return res.redirect('/');
			})
			.catch(err => {
				req.flash('error', err.message);
				return res.redirect('/login');
			});
	});


	app.get('/logout', function (req, res) {
		// Assign  null value in session
		req.session.destroy();
		res.redirect('/login');
	});
};