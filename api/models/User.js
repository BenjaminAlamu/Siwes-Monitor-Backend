/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {


    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    type: {
      type: 'string',
      required: true
    },

  },
  validationMessages: {

    email: {
      string: "Please enter a valid email address",
      required: "Email Address is required",
      unique: "Email address has already been taken"
    },
    phoneNum: {
      string: "Phone Number is required",
      required: "Phone Number is required",
      unique: "Phone Number already exists, please confirm number"
    },
    type: {
      string: "User Type is required",
      required: "User Type is required",
    }
  },
  customToJSON: function () {
    return _.omit(this, ['password']);
  },
  beforeCreate: function (user, cb) {
    delete user.password_confirmation;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(user.password, salt, function () { }, function (err, hash) {
        user.password = hash;
        cb(null, user);
      });
    });
  },

  beforeUpdate: function (password, cb) {

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function () { }, function (err, hash) {
        password = hash;

      });
    });
  },
  hashPassword: function (password) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function () { }, function (err, hash) {
        console.log("dds" + hash)
        return hash
      });
    });
  }
};