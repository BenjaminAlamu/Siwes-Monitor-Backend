/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: async function (req, res) {
    try {
      const data = await Student.create(req.body);
      res.send({
        status: 200,
        success: true,
        data
      });
    } catch (err) {
      console.log(err.message);
      res.send({
        status: 200,
        success: false,
        message: err.message,
        err
      });
    }
  },
  list: async function (req, res) {
    try {
      const data = await Student.find({
        where: {
          school: req.params.id
        }
      });
      res.send({
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
  delete: async function (req, res) {
    try {
      const data = await Student.destroy({ id: req.body.id });
      res.send({
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


