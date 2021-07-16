const express = require('express');
const {getAllBooks,
    getAllBookIds,
    getBookByBookId,
    createBookRequest,
    getTitleByBookId,
    getAuthorByBookId} = require('../controllers/books');
const router = new express.Router();

router
    .route('/')
    .get(getAllBooks)
    .post(createBookRequest);

router
    .route('/list')
    .get(getAllBookIds);

router.route('/:id')
    .get(getBookByBookId);

router.route('/:id/title')
    .get(getTitleByBookId);

router.route('/:id/author')
    .get(getAuthorByBookId);


module.exports = router;
