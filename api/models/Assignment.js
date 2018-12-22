/**
 * Assignment.js
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
    school: {
      model: "school",
      required: true
    }

  }
};

