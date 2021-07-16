const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Books = require('../models/Books');

exports.BookRequestErrors = {
    NOT_FOUND: 'User Request not found with id of'
};
/**
 * @desc Get all Book Requests
 * @route GET /api/v1/book/
 * @access Public
 */
exports.getAllBooks = asyncHandler(async (req, res, next) => {
    const BookRequests = await Books.find();
    res.status(201).json({
        success: true,
        count: BookRequests.length,
        data: BookRequests
    });
});

/**
 * @desc Get Books Id's
 * @route GET /api/v1/book/:id
 * @access Public
 */
exports.getBookByBookId = asyncHandler(async (req, res, next) => {
    const userRequest = await Books.find({
        'bookId': req.params.id
    });
    if (!userRequest) {
        return next(
            new ErrorResponse(this.BookRequestErrors.NOT_FOUND+`${req.params.id}`
                , 404));
    }
    res.status(201).json({
        success: true,
        data: userRequest
    });
});

/**
 * @desc Get Title By BookId
 * @route GET /api/v1/book/:id/title
 * @access Public
 */
exports.getTitleByBookId = asyncHandler(async (req, res, next) => {
    const userRequest = await Books.find({
        'bookId': req.params.id
    }).select('title -_id');
    if (!userRequest) {
        return next(
            new ErrorResponse(this.BookRequestErrors.NOT_FOUND+`${req.params.id}`
                , 404));
    }
    res.status(201).json({
        success: true,
        data: userRequest
    });
});

/**
 * @desc Get Author By BookId
 * @route GET /api/v1/book/:id/author
 * @access Public
 */
exports.getAuthorByBookId = asyncHandler(async (req, res, next) => {
    const userRequest = await Books.find({
        'bookId': req.params.id
    }).select('author -_id');
    if (!userRequest) {
        return next(
            new ErrorResponse(this.BookRequestErrors.NOT_FOUND+`${req.params.id}`
                , 404));
    }
    res.status(201).json({
        success: true,
        data: userRequest
    });
});

/**
 * @desc Get all Books Request
 * @route GET /api/v1/book/list
 * @access Public
 */
exports.getAllBookIds = asyncHandler(async (req, res, next) => {
    const BookRequests = await Books.find().select('bookId -_id');
    res.status(201).json({
        success: true,
        count: BookRequests.length,
        data: BookRequests
    });
});

/**
 * @desc POST the book Requests
 * @route POST /api/abc/v1/usageRequests
 * @access Public
 */
exports.createBookRequest = asyncHandler(async (req, res, next) => {
    const userRequest = await Books.create(req.body);
    res.status(201).json({
        success: true,
        data: userRequest
    });
});
