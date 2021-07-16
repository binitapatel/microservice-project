/**
 * @Class ErrorResponse
 * */
class ErrorResponse extends Error {
    /**
     *  Error Response.
     *  @param {String} message
     * @param {Number} statusCode response body
     * @Constructor
     * */
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse;
