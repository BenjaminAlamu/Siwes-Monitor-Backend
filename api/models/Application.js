/**
 * Application.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //(firstname, lastname, school, companyAccept, studentAccept,companyID)
    student: {
      model: "student",
      required: true
    },
    companyAccept: {
      type: "string",
      defaultsTo: "N/A"
    },
    studentAccept: {
      type: "string",
      defaultsTo: "N/A"
    },
    companyStatus: {
      type: "string",
      defaultsTo: "N/A"
    },
    studentStatus: {
      type: "string",
      defaultsTo: "N/A"
    },
    company: {
      model: "company",
      required: true
    }
  },
  validationMessages: {
    student: {
      required: "Student is required"
    },
    company: {
      required: "Company is required"
    }
  }
};
