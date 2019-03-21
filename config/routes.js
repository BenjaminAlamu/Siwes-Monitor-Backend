/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {


  /*
   * Auth Routes
   */
  "POST /login": {
    controller: "AuthController",
    action: "login"
  },
  "POST /change-password": {
    controller: "AuthController",
    action: "changePassword"
  },
  "POST /school/register": {
    controller: "AuthController",
    action: "registerSchool"
  },

  "POST /staff/register": {
    controller: "AuthController",
    action: "registerStaff"
  },
  "POST /company/register": {
    controller: "AuthController",
    action: "registerCompany"
  },
  "POST /student/register": {
    controller: "AuthController",
    action: "registerStudent"
  },

  /*
     * Company Routes
     */
  "POST /createCompany": {
    controller: "CompanyController",
    action: "create"
  },
  "POST /listCompany": {
    controller: "CompanyController",
    action: "list"
  },

  /*
     * Student Routes
     */

  "POST /createStudent": {
    controller: "StudentController",
    action: "create"
  },

  /*
   * Application Routes
   */

  "POST /apply": {
    controller: "ApplicationController",
    action: "create"
  },
  "GET /list/student-applications/:id": {
    controller: "ApplicationController",
    action: "listStudents"
  },
  "GET /list/company-applications/:id": {
    controller: "ApplicationController",
    action: "listCompanies"
  },
  "POST /applications/company/accept/": {
    controller: "ApplicationController",
    action: "companyAccept"
  },
  "GET /applications/company/reject/:id": {
    controller: "ApplicationController",
    action: "companyReject"
  },
  "POST /applications/student/accept/": {
    controller: "ApplicationController",
    action: "studentAccept"
  },
  "GET /applications/student/reject/:id": {
    controller: "ApplicationController",
    action: "studentReject"
  },

  /*
   * School Routes
   */

  "POST /school/staff": {
    controller: "SchoolController",
    action: "liststaff"
  },

  "POST /school/student": {
    controller: "SchoolController",
    action: "listStudent"
  },

  /*
  * Assignment Routes
  */

  "POST /staff/assign": {
    controller: "AssignmentController",
    action: "create"
  },

  "POST /staff/assign/list": {
    controller: "AssignmentController",
    action: "list"
  },




  /*
   * Placement Routes
   */

  "POST /placement/student/end": {
    controller: "PlacementsController",
    action: "studentEnd"
  },
  "POST /placement/company/terminate": {
    controller: "PlacementsController",
    action: "companyTerminate"
  },
  "POST /placement/company/end": {
    controller: "PlacementsController",
    action: "companyEnd"
  },

  /*
  * Report Routes
  */

  "POST /report/create": {
    controller: "ReportController",
    action: "create"
  },
  "GET /report/student/view": {
    controller: "ReportController",
    action: "studentView"
  },
  "GET /report/company/view": {
    controller: "ReportController",
    action: "companyView"
  },
  "GET /report/staff/view": {
    controller: "ReportController",
    action: "staffView"
  },
  "POST /report/staff/approve": {
    controller: "ReportController",
    action: "staffApprove"
  },
  "POST /report/company/approve": {
    controller: "ReportController",
    action: "companyApprove"
  },

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
   * etc. depending on your default view engine) your home page.              *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": {
    view: "homepage"
  }

  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
};
