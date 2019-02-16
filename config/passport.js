/**
 * Passport configuration file where you should configure strategies
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function (username, password, callback) {
    User.findOne({
      username: username
    }).exec(function (err, user) {

      if (err) {
        return callback(null, err);
      }
      if (!user) {
        return callback(null, false, {
          message: 'Invalid username'
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
