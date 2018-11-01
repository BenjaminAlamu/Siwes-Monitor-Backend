/**
 * ReportController
 *
 * @description :: Server-side logic for managing reports
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: async function (req, res) {
    try {
      const check = await Placements.find({
        where: { student: req.body.student, status: "active" }
      });
      if (check.length > 0) {
        return res.send({
          status: 400,
          success: false,
          message: "You can't create a report until you have a placement"
        });
      }
      let payload = req.body;
      const data = await Report.create(payload);
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
  studentView: async function (req, res) {
    try {
      const data = await Report.find({
        where: { student: req.params.id }
      })
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
  companyView: async function (req, res) {
    try {
      const data = await Report.find({
        where: { company: req.params.id }
      })
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
  staffView: async function (req, res) {
    try {
      const data = await Report.find({
        where: { staff: req.params.id }
      })
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
  staffApprove: async function (req, res) {
    try {
      await Report.update({
        id: req.body.id
      }).set({ staffApprove: "true" });
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
  companyApprove: async function (req, res) {
    try {
      await Report.update({
        id: req.body.id
      }).set({ companyApprove: "true" });
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
  }
};
