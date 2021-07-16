const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    bookId: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        unique: true
    },
    author: {
        type: String,
        required: [true, 'Please add a companyName']
    }
});

module.exports = mongoose.model('Books', BooksSchema);
