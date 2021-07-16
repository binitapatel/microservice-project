const express = require('express');
const interceptor = require('./middleware/interceptor');
const errorHandler = require('./middleware/error');
const morgan = require('morgan');
const dotEnv = require('dotenv');
// console error style change
require('colors');

const connectDB = require('./config/db');

// Load env vars
dotEnv.config({path: './config/config.env'});

// connect with the DB
connectDB();

// Route files
const books = require('./routes/books');
const app = express();

// Body Parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(interceptor);
// Mount routes
app.use('/api/v1/book', books);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhandled Promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
});

module.exports = app;
