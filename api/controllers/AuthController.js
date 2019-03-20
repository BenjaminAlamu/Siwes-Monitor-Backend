/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var auth = require('../services/AuthService');



module.exports = {
    register: function (req, res) {
        auth.registerStaff(req, res);
    },
    login: function (req, res) {

        auth.login(req, res);
    },
    logout: function (req, res) {
        console.log("Pre logout");
        req.logout();

    }
};


