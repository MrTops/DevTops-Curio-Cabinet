/*
*	DevTops 2021
*
*	Has two functions used for logging stuff to the console
*/

const moment = require("moment");

/**
 * Outputs something to the console with a timestamp, not saved
 * @param {*} message - The actual content of the log message
 */
module.exports.output = message => console.log(`[${moment()}] ${message}`);