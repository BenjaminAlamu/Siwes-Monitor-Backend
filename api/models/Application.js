/**
 * Application.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //(firstname, lastname, school, companyAccept, studentAccept,companyID)
    studentName: {
      type: "string",
      required: true
    },
    school: {
      type: "string",
      required: true
    },
    companyStatus: {
      type: "string",
      defaultsTo: "N/A"
    },
    studentStatus: {
      type: "string",
      defaultsTo: "N/A"
    },
    student: {
      type: "string",
      required: true
    },
    company: {
      type: "string",
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
      required: "Last Name is required"
    },
    school: {
      string: "School Name is required",
      required: "School Name is required"
    },
    studentID: {
      string: "Student ID missing",
      required: "Student ID must be passed with request"
    },
    companyID: {
      string: "Company ID missing",
      required: "Company ID must be passed with request"
    }
  }
};
