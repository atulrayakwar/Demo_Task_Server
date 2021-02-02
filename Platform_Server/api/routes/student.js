const verifyToken = require('../authentication/verify-token');
const controllerHandler = require('../controller-handler/controller-handler').controllerHandler;

module.exports = (app) => {

    studentController = require('../controllers/student.controller');

    /**0 
     * API For related to student platform
     */

    app.get('/student/getAllStudent', controllerHandler(
        studentController.getStudentRecord, (request, response, next) => request.body
    ));

    app.post('/student/register', controllerHandler(
        studentController.registerStudent, (request, response, next) => request.body
    ));

    
}
