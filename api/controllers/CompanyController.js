/**
 * CompanyController
 *
 * @description :: Server-side logic for managing companies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list: async function(req, res){
        try{
            const data = await Company.find();
            res.send({
                status: 200,
                success: true,
                data
            })

        }
        catch(err){
            console.log(err.message);
            res.send({
                status: 400,
                success: false,
                message: err.message,
                err
            })
            
        }
    },
    create: async function(req, res){
        try{
            const data  = await Company.create(req.body);
            res.send({
                status: 200,
                success: true,
                data
            })            
        }
        catch(err){
            console.log(err.message);
            res.send({
                status: 400,
                success: false,
                message: err.message,
                err
            })
        }
    }
	
};

