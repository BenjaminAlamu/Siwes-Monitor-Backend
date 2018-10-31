/**
 * School.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {

  attributes: {
    schoolName: {
      type: "string",
      required: true
    },
    address: {
      type: "string",
      required: true
    },
    email: {
      type: "string",
      required: true,
      unique: true
    },
  },
  validationMessages: {
    schoolName: {
      string: "First Name is required",
      required: "First Name is required"
    },
    address: {
      string: "Last Name is required",
      required: "Last Name  is required"
    },
    email: {
      string: "Please enter a valid email address",
      required: "Email Address is required",
      unique: "Email address has already been taken"
    },
  }
};

