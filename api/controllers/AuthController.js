/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var auth = require('../services/AuthService');



module.exports = {
    registerStaff: function (req, res) {
        auth.registerStaff(req, res);
    },
    registerStudent: function (req, res) {
        auth.registerStudent(req, res);
    },
    registerCompany: function (req, res) {
        auth.registerCompany(req, res);
    },
    registerSchool: function (req, res) {
        auth.registerSchool(req, res);
    },
    changePassword: function (req, res) {

        auth.updatePassword(req, res);
    },
    login: function (req, res) {

        auth.login(req, res);
    },
    logout: function (req, res) {
        console.log("Pre logout");
        req.logout();
    }
};


