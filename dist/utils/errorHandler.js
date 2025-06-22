"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (res, err) => {
    res.status(400).json({
        message: "Validation failed",
        success: false,
        error: err
    });
};
exports.handleError = handleError;
exports.default = exports.handleError;
