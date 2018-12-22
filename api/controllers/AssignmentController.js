/**
 * AssignmentController
 *
 * @description :: Server-side logic for managing assignments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: async function (req, res) {
        try {
            const data = await Assignment.create(req.body);
            await Student.update({
                id: req.body.student
            }).set({ staff: req.body.staff });
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
    list: async function (req, res) {
        try {
            const data = await Assignment.find({
                where: {
                    staff: req.params.id
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
};

