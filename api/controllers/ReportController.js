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
          message: "You can't create a report until you have a placment"
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
  view: async function (req, res) {
    try {
      //Placement model

    } catch (err) {
      console.log(err.message);
      res.send({
        status: 400,
        success: false,
        message: err.message,
        err
      });
    }
  }
};
