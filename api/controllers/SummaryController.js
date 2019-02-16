/**
 * SummaryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getStudent: async function (req, res) {
        try {
            const data = await Staff.create(req.body);
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
  

};

