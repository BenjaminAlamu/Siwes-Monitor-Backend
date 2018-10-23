/**
 * ApplicationController
 *
 * @description :: Server-side logic for managing applications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: async function(req, res) {
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
  listStudents: async function(req, res) {
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
  listCompanies: async function(req, res) {
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
  companyAccept: async function(req, res) {
    try {
      let id = req.body.id;
      let company = req.body.company;
      let student = req.body.student;
      let payload = await Application.update({ id: req.body.id }).set({
        companyStatus: "Accepted"
      });
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
  companyReject: async function(req, res) {
    try {
      let id = req.params.id;
      let payload = await Application.update({
        id: req.body.id
      }).set({ companyStatus: "Rejected" });
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
  studentAccept: async function(req, res) {
    try {
      let id = req.params.id;
      let payload = await Application.update({
        id: req.body.id
      }).set({ studentStatus: "Accepted" });
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
  studentReject: async function(req, res) {
    try {
      let id = req.params.id;
      let payload = await Application.update({
        id: req.body.id
      }).set({ studentStatus: "Rejected" });
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
