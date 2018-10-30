/**
 * Placements.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //(Student, company,status{active,terminated,ended},companyTerminated, studentEnd, CompanyEnd)
  attributes: {
    student: {
      model: "student",
      required: true
    },
    status: {
      type: "string",
      defaultsTo: "active"
    },
    companyTerminated: {
      type: "boolean",
      defaultsTo: false
    },
    terminateReason: {
      string: "string",
      defaultsTo: "N/A"
    },
    studentEnd: {
      type: "boolean",
      defaultsTo: false
    },
    companyEnd: {
      type: "boolean",
      defaultsTo: false
    },
    company: {
      model: "company",
      required: true
    },
    school: {
      model: "school",
      required: true
    }
  },
  validationMessages: {
    student: {
      required: "Student is required"
    },
    company: {
      required: "Company is required"
    },
    school: {
      required: "School is required"
    }
  }
};
