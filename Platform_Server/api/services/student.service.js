const moment = require('moment');
const models = require('../../db/models');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const generator = require('generate-password');
const bcrypt = require('bcryptjs');

/**
 * Define foreign key constraints between tables
 * And remove default id attribute
 */ //  eg::
// models.CartMaster.belongsTo(models.StatusMaster, { foreignKey: 'StatusId' });
// models.CartMaster.belongsTo(models.CustomerMaster, { foreignKey: 'CustomerId' });

/**
 * 
 * @param { Object } student_Details
 */
// exports.registerStudent = async (student_Details) => {
//     let { studentName } = student_Details;             
            

//             return models.StudentData.create({student_Details})

//                 .then((result) => {                  
                                                                
                   
//                     return {
//                         data: result,
//                         message: 'Thanks for registering up.',
//                         status: 'success',
//                         statusCode: 200
//                         }
//                 });        
    
// }

exports.registerStudent = async (student_Details) => {

    let { studentName } = student_Details; 

    console.log("==== Request object ====> ",student_Details);
    
    

        return models.StudentData.create(student_Details)
            .then(studentDataParam => {
                return {
                    data: studentDataParam,
                    message: 'Student registered successfully !',
                    status: 'success',
                    statusCode: `200`
                }
            })
    
}


exports.getStudentRecord = (request, response) => {

    return models.StudentData.findAll({
        returning: true,
        
        attributes: ['studentId', 'studentName', 'marks']

    }).then((result) => {

        if (result.length > 0) {
            return {
                data: result,
                message: 'List of Students(s)',
                statusCode: 200
            }
        } else {
            return {
                data: null,
                message: 'No Student found',
                statusCode: 404
            }
        }
    });
}









