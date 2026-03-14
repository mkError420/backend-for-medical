"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    console.error(err);
    if (err.name === 'CastError') {
        const message = 'Resource not found';
        error = { ...error, statusCode: 404, message };
    }
    if (err.name === 'MongoError' && err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = { ...error, statusCode: 400, message };
    }
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val) => val.message).join(', ');
        error = { ...error, statusCode: 400, message };
    }
    if (err.name === 'JsonWebTokenError') {
        const message = 'Invalid token';
        error = { ...error, statusCode: 401, message };
    }
    if (err.name === 'TokenExpiredError') {
        const message = 'Token expired';
        error = { ...error, statusCode: 401, message };
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map