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
  }
};
