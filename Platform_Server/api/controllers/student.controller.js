const validate = require('../helpers/validation');
const errorConstant = require(`../helpers/error-messages`);
const studentService = require('../services/student.service');

/**
 * 
 * @param { String } student_Id 
 * @param { Object } student_Details
 *  
 */

// exports.registerStudent = (student_Details, response) => {

//     if (validate.isEmptyObject(student_Details)) {

//         return { 
//                 statusCode: 400,
//                 message: "Expected object"
//                 };
//     }

//     console.log('hospital Data o =================================>',student_Details);

//     return studentService.registerStudent(student_Details).then(studentData => {
//         console.log('hospital Data =================================>',studentData);
//         return {

//             payload: studentData
//         }

//     }).catch(function (err) {

//         console.log("Check Exception ::::::: " + JSON.stringify(err))
//         return {

//             message: `Student Register Failuer..`,
//             status: 'failure'
//         }
//     });

// }

exports.registerStudent = async (student_Details) => {
    

    if (validate.isEmptyObject(student_Details)) {
        return {
            statusCode: 400,
            message: "Expected object"
        };
    }

    const { studentName, marks } = student_Details;

    if (validate.isEmptyString(marks) && !validate.isNumber(marks)) {

        return {
            statusCode: 400,
            message: "Student marks required and must be a number",
            data: null
        }
    }

    return await studentService.registerStudent(student_Details);
}



exports.getStudentRecord = (request, response) => {

    return studentService.getStudentRecord(request, response);
}


