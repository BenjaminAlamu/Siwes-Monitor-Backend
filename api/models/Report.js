/**
 * Report.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    student: {
      model: "student",
      required: true
    },
    staff: {
      model: "staff",
      required: true
    },
    company: {
      model: "company",
      required: true
    },
    monday: {
      type: "string",
      required: true
    },
    tuesday: {
      type: "string",
      required: true
    },
    wednesday: {
      type: "string",
      required: true
    },
    thursday: {
      type: "string",
      required: true
    },
    friday: {
      type: "string",
      required: true
    },
    weeklySummary: {
      type: "string",
      required: true
    },
    companyApprove: {
      type: "boolean",
      defaultsTo: false
    },
    staffApprove: {
      type: "boolean",
      defaultsTo: false
    },
    beginDate: {
      type: "datetime",
      required: true
    },
    endDate: {
      type: "datetime",
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
    staff: {
      required: "Staff is required"
    },
    monday: {
      required: "You need to enter what you did on Monday"
    },
    tuesday: {
      required: "You need to enter what you did on Tuesday"
    },
    wednesday: {
      required: "You need to enter what you did on Wednesday"
    },
    thursday: {
      required: "You need to enter what you did on Thursday"
    },
    friday: {
      required: "You need to enter what you did on Friday"
    },
    weeklySummary: {
      required: "You need to enter your weekly Summary"
    },
    beginDate: {
      required: "Please a valid date"
    },
    endDate: {
      required: "Please a valid date"
    }
  }
};
