/**
 * 
 * @param { Object } promise 
 * @param { * } params It could be object or array or string sent from client as API input
 */
exports.controllerHandler = (promise, params) => async (request, response, next) => {
    const boundParams = params ? params(request, response, next) : null;

    try {
        const result = await promise(boundParams, response);

        return response.status(200).send(result);
    } catch (error) {
       
        console.log('Error in controllerhandler: ', error);      
        return response.status(500) && next(error);
    }
};
