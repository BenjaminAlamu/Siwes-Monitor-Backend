/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {

    username: {
      type: 'string',
      required: true,
      unique: true
    },
    phonenumber: {
      type: 'number',
      required: true,
    },
    firstname: {
      type: 'string',
      required: true,
    },
    lastname: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    }

  },
  validationMessages: {
    firstName: {
      string: "First Name is required",
      required: "First Name is required"
    },
    lastName: {
      string: "Last Name is required",
      required: "Last Name  is required"
    },
    schoolName: {
      string: "Please enter a valid school name",
      required: "School name is required"
    },
    email: {
      string: "Please enter a valid email address",
      required: "Email Address is required",
      unique: "Email address has already been taken"
    },
    phoneNum: {
      string: "Phone Number is required",
      required: "Phone Number is required",
      unique: "Phone Number already exists, please confirm number"
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
  }

};