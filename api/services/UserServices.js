



module.exports = {

    async getSchool(user) {
        try {
            data = await School.find({
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

        res.send({
            status: 200,
            success: true,
            data
        });
    },







};
