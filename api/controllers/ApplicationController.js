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
  list: async function(req, res) {
    try {
      let companyID = req.body.company;
      const data = await Application.find({
        where: { company: companyID }
      });
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
      let id = req.params.id;
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
