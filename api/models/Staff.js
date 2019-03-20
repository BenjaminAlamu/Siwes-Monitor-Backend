/**
 * Staff.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: "string",
      required: true
    },
    lastName: {
      type: "string",
      required: true
    },
    schoolName: {
      type: "string",
      required: true
    },
    email: {
      type: "string",
      required: true,
      unique: true
    },
    phoneNum: {
      type: "string",
      required: true,
      unique: true
    },
    school: {
      model: "school",
      required: true
    },
    userid: {
      type: "string",
      required: true,
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
  }
};

