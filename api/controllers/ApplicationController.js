/**
 * ApplicationController
 *
 * @description :: Server-side logic for managing applications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: async function (req, res) {
    try {
      let payload = req.body;
      const data = await Application.create(payload);

      return res.send({
        status: 200,
        success: true,
        data
      });
    } catch (err) {
      console.log(err.message);
      res.send({
        status: 400,
        success: false,
        message: err.message,
        err
      });
    }
  },
  listStudents: async function (req, res) {
    try {
      let companyID = req.params.id;
      console.log(companyID);
      const data = await Application.find({
        where: { company: companyID }
      }).populate("student");
      return res.send({
        status: 200,
        success: true,
        data
      });
    } catch (err) {
      res.send({
        status: 400,
        success: false,
        message: err.message,
        err
      });
    }
  },
  listCompanies: async function (req, res) {
    try {
      let studentID = req.params.id;
      const data = await Application.find({
        where: { student: studentID }
      }).populate("company");
      return res.send({
        status: 200,
        success: true,
        data
      });
    } catch (err) {
      res.send({
        status: 400,
        success: false,
        message: err.message,
        err
      });
    }
  },
  companyAccept: async function (req, res) {
    try {
      await Application.update({
        id: req.body.id
      }).set({ companyStatus: "Accepted", companyAccept: "true" });
      //Call notification controller
      return res.send({
        status: 200,
        success: true
      });
    } catch (err) {
      res.send({
        status: 400,
        success: false,
        message: err.message,
        err
      });
    }
  },
  companyReject: async function (req, res) {
    try {
      await Application.update({
        id: req.params.id
      }).set({ companyStatus: "Rejected", companyAccept: "false" });
      //Call notification controller
      return res.send({
        status: 200,
        success: true
      });
    } catch (err) {
      res.send({
        status: 400,
        success: false,
        message: err.message,
        err
      });
    }
  },
  studentAccept: async function (req, res) {
    try {
      //Check placement and ensure that the user doesnt already have a placement
      const check = await Placements.find({
        where: { student: req.body.student, status: "active" }
      });
      if (check.length > 0) {
        return res.send({
          status: 400,
          success: false,
          message: "You already have a company"
        });
      }
      //Create the placement object and add to the placement model
      let placement = {
        student: req.body.student,
        company: req.body.company
      };
      const place = await Placements.create(placement);

      //Edit the company atrribute of the student model
      const edit = await Student.update({
        id: req.body.id
      }).set({ company: req.company.id });
      await Application.update({
        id: req.body.id
      }).set({ studentStatus: "Accepted", studentAccept: "true" });

      //Call notification controller
      return res.send({
        status: 200,
        success: true
      });
    } catch (err) {
      res.send({
        status: 400,
        success: false,
        message: err.message,
        err
      });
    }
  },
  studentReject: async function (req, res) {
    try {
      await Application.update({
        id: req.params.id
      }).set({ studentStatus: "Rejected", studentAccept: "false" });
      //Call notification controller
      return res.send({
        status: 200,
        success: true
      });
    } catch (err) {
      res.send({
        status: 400,
        success: false,
        message: err.message,
        err
      });
    }
  }
};
