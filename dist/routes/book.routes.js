"use strict";
// import express from "express";
// import {
//   createBook,
//   getBooks,
//   getBookById,
//   updateBook,
//   deleteBook
// } from "../controllers/book.controller";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
// router.post("/api/books", createBook);
// router.get("/api/books", getBooks);
// router.get("/api/books/:bookId", getBookById);
// router.put("/api/books/:bookId", updateBook);
// router.delete("/api/books/:bookId", deleteBook);
// export default router;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("../controllers/book.controller");
const router = express_1.default.Router();
router.post("/books", book_controller_1.createBook);
router.get("/books", book_controller_1.getBooks);
router.get("/books/:bookId", book_controller_1.getBookById);
router.put("/books/:bookId", book_controller_1.updateBook);
router.delete("/books/:bookId", book_controller_1.deleteBook);
exports.default = router;
