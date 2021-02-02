
/**
 * Method to check valid string
 * @param { String } string 
 * @returns { boolean }
 */
module.exports.isEmptyOrNull = string => !(string && string.trim());

/**
 * 
 * @param { Object } value input recieved from API
 * @returns { boolean } returns true if it empty object or it is not object
 */
module.exports.isEmptyObject = value => !(value.constructor === Object && Object.keys(value).length != 0);

/**
 * Method to check valid array
 * @param { Array } value to be checked as valid array
 * @returns { Boolean } true if it is not valid array or empty array
 */
module.exports.isEmptyArray = value => !(Array.isArray(value) && value.length > 0);

/**
 * Method to check valid string
 * @param { String } string to be checked
 * @returns { Boolean } true if it is empty or null string
 */
module.exports.isEmptyString = string => !(string && string.toString().trim());

/**
 * 
 * @param { INT } number to be checked as valid integer
 * @returns { Boolean } true if it is a number
 */
module.exports.isNumber = number => number && number != NaN && typeof number === "number";