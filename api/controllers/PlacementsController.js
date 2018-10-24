/**
 * PlacementsController
 *
 * @description :: Server-side logic for managing placements
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: async function(req, res) {
    try {
      let payload = req.body;
      const data = await Placements.create(payload);
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
  studentEnd: async function(req, res) {
    try {
      await Placements.update({
        id: req.body.id
      }).set({ studentEnd: true });
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
  companyEnd: async function(req, res) {
    try {
      await Placements.update({
        id: req.body.id
      }).set({ companyEnd: true });
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
  companyTerminate: async function(req, res) {
    try {
      await Placements.update({
        id: req.body.id
      }).set({ companyTerminate: true, terminateReason: req.body.reason });
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
