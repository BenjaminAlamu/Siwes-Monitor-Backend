/**
 * Passport configuration file where you should configure strategies
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function (email, password, callback) {
    User.findOne({
      email: email
    }).exec(function (err, user) {

      if (err) {
        return callback(null, err);
      }
      if (!user) {
        return callback(null, false, {
          message: 'Invalid email'
        });
      }
      bcrypt.compare(password, user.password, function (err, res) {
        if (err || !res) {
          return callback(null, false, {
            message: 'Invalid Password'
          });
        }
        return callback(null, user);
      });
    });
  }));
