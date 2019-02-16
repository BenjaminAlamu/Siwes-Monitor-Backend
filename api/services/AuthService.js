const passport = require('passport');
const jwt = require('jsonwebtoken');



module.exports = {
  //Login function
  login: function (req, res) {
    passport.authenticate('local', function (err, user, info) {
      console.log("Here");
      //Checks if error is found or if user doesnt exist
      if (err || !user) {
        return res.send({
          success: false,
          status: 400,
          message: info.message,
          user
        });
      }
      var token = jwt.sign(user, "Secret", (err, token) => {
        expiresIn: 60 * 60 * 24
        res.send({
          success: true,
          status: 200,
          token,
          user
        });
      });
      // })
    })(req, res);
  },
  //Register function
  register: function (req, res) {
    console.log("Create user function");
    User.create(req.data).exec(function (err, user) {
      if (err) {
        success = {
          "success": false,
          status: 400,
        }
        res.json(success);
      }
      success = {
        "success": true,
        status: 200,
      }
      res.json(success);
    })

  },

};
