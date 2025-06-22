"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBorrowSummary = exports.borrowBook = void 0;
const book_model_1 = require("../models/book.model");
const borrow_model_1 = require("../models/borrow.model");
const borrowBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { book, quantity, dueDate } = req.body;
    const targetBook = yield book_model_1.Book.findById(book);
    if (!targetBook || targetBook.copies < quantity) {
        return res.status(400).json({
            success: false,
            message: "Not enough copies available",
            error: "Insufficient stock"
        });
    }
    targetBook.copies -= quantity;
    targetBook.updateAvailability();
    yield targetBook.save();
    const borrow = yield borrow_model_1.Borrow.create({ book, quantity, dueDate });
    res.status(201).json({ success: true, message: "Book borrowed successfully", data: borrow });
});
exports.borrowBook = borrowBook;
const getBorrowSummary = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const summary = yield borrow_model_1.Borrow.aggregate([
        { $group: { _id: "$book", totalQuantity: { $sum: "$quantity" } } },
        {
            $lookup: {
                from: "books",
                localField: "_id",
                foreignField: "_id",
                as: "book"
            }
        },
        { $unwind: "$book" },
        {
            $project: {
                totalQuantity: 1,
                book: {
                    title: "$book.title",
                    isbn: "$book.isbn"
                }
            }
        }
    ]);
    res.json({ success: true, message: "Borrowed books summary retrieved successfully", data: summary });
});
exports.getBorrowSummary = getBorrowSummary;
