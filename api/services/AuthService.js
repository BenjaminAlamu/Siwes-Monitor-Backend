const passport = require('passport');
const jwt = require('jsonwebtoken');



module.exports = {
  //Login function
  async login(req, res) {
    passport.authenticate('local', async function (err, user, info) {
      console.log("Here");
      //Checks if error is found or if user doesnt exist
      if (err || !user) {
        return res.send({
          success: false,
          status: 400,
          message: info,
          err,
          user
        });
      }

      let type = user.type
      let data;
      if (type === 'school') {
        try {
          data = await School.findOne({
            where: {
              userid: user.id
            }
          })
        } catch (err) {
          res.send({
            status: 400,
            success: false,
            message: err.message,
            err
          });
        }
      }

      if (type === 'student') {
        try {
          data = await Student.findOne({
            where: {
              userid: user.id
            }
          })
        } catch (err) {
          res.send({
            status: 400,
            success: false,
            message: err.message,
            err
          });
        }
      }

      if (type === 'company') {
        try {
          data = await Company.findOne({
            where: {
              userid: user.id
            }
          })
        } catch (err) {
          res.send({
            status: 400,
            success: false,
            message: err.message,
            err
          });
        }
      }

      if (type === 'staff') {
        try {
          data = await Staff.findOne({
            where: {
              userid: user.id
            }
          })
        } catch (err) {
          res.send({
            status: 400,
            success: false,
            message: err.message,
            err
          });
        }
      }


      var token = jwt.sign(user, "Secret", (err, token) => {
        expiresIn: 60 * 60 * 24
        res.send({
          success: true,
          status: 200,
          token,
          user, data
        });
      });
      // })
    })(req, res);
  },

  async getSchool(data) {

  },


  //Create Staff

  async registerSchool(req, res) {

    try {
      let me = await User.create(req.body.user)
      let school = req.body.school;
      school.userid = me.id
      await School.create(school)
      success = {
        "success": true,
        status: 200,
      }
      return res.send(success);
    }
    catch (err) {
      success = {
        "success": false,
        status: 400,
        err
      }
      return res.send(success)
    }
  },

  async registerStaff(req, res) {

    try {
      let me = await User.create(req.body.user)
      let staff = req.body.staff;
      staff.userid = me.id
      await Staff.create(staff)
      success = {
        "success": true,
        status: 200,
      }
      return res.send(success);
    }
    catch (err) {
      success = {
        "success": false,
        status: 400,
        err
      }
      return res.send(success)
    }
  },

  async registerStudent(req, res) {

    try {
      let me = await User.create(req.body.user)
      let student = req.body.student;
      student.userid = me.id
      await Student.create(student)
      success = {
        "success": true,
        status: 200,
      }
      return res.send(success);
    }
    catch (err) {
      success = {
        "success": false,
        status: 400,
        err
      }
      return res.send(success)
    }
  },

  async registerCompany(req, res) {

    try {
      let me = await User.create(req.body.user)
      let company = req.body.company;
      company.userid = me.id
      await Company.create(company)
      success = {
        "success": true,
        status: 200,
      }
      return res.send(success);
    }
    catch (err) {
      success = {
        "success": false,
        status: 400,
        err
      }
      return res.send(success)
    }
  },



  //Register function
  async register(req, res) {

    try {
      await User.create(req.data)
      success = {
        "success": true,
        status: 200,
      }
      return res.send(success);
    }
    catch (err) {
      success = {
        "success": false,
        status: 400,
      }
      return res.send(success)
    }
  }

};
