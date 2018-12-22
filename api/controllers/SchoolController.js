/**
 * SchoolController
 *
 * @description :: Server-side logic for managing schools
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: async function (req, res) {
        try {
            const data = await School.create(req.body);
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
    }
};

