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
    companyReject: {
      type: "string",
      defaultsTo: "N/A"
    },
    studentAccept: {
      type: "string",
      defaultsTo: "N/A"
    },
    studentReject: {
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
  }
  // validationMessages: {
  //   firstName: {
  //     string: "First Name is required",
  //     required: "First Name is required"
  //   },
  //   lastName: {
  //     string: "Last Name is required",
  //     required: "Last Name is required"
  //   },
  //   school: {
  //     string: "School Name is required",
  //     required: "School Name is required"
  //   },
  //   studentID: {
  //     string: "Student ID missing",
  //     required: "Student ID must be passed with request"
  //   },
  //   companyID: {
  //     string: "Company ID missing",
  //     required: "Company ID must be passed with request"
  //   }
  // }
};
