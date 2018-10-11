/**
 * Company.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


  attributes: {
    companyName: {
      type: 'string',
      required: true,
      unique: true
    },
    companyEmail: {
      type: 'string',
      required: true,
      unique: true
    },
    companyUsername: {
      type: 'string',
      required: true,
      unique: true
    },
    companyAddress: {
      type: 'string',
      required: true
    },
    companyPhoneNum: {
      type: 'string',
      required: true,
      unique: true
    },
  },
  validationMessages: {
    companyName: {
        string: 'Company Name is required',
        required: 'Company Name is required',
        unique: 'Company Name already exists, please confirm name'
    },
    companyEmail: {
      string: 'Company Email is required',
      required: 'Company Email  is required',
      unique: 'Company Email already exists, please confirm email'
    },
    companyUsername: {
      string: 'Company Username is required',
      required: 'Company Username is required',
      unique: 'Company Username already exists, please confirm username'
    },
    companyAddress: {
      string: 'Company Address is required',
      required: 'Company Address is required'
    },
    companyPhoneNum: {
      string: 'Company Phone Number is required',
      required: 'Company Phone Number is required',
      unique: 'Phone Number already exists, please confirm number'
    },
  }

};


