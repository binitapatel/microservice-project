/**
 * @desc Logs request to console
 * @param {Object} req request body
 * @param {Object} res response body
 * @param {Object}  next:Observer
 * */
const interceptor = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

module.exports = interceptor;
