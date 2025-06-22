"use strict";
// import globalErrorHandler from './middleware/globalErrorHandler';
// import notFound from './middleware/notFound';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express
// const express = require('express')
// import express, { Application, Request, Response } from 'express'
// const app: Application= express()
// //1. Create Book
// app.post('/api/books', (req :Request, res:Response) => {
//   res.send('Welcome assignment 3')
// })
// //2. Get All Books
// app.get('/', (req :Request, res:Response) => {
//   res.send('Welcome assignment 3')
// })
// //3. Get Book by ID
// app.get('/api/books/:bookId', (req :Request, res:Response) => {
//   res.send('Welcome assignment 3')
// })
// //4. Update Book
// app.put('/api/books/:bookId', (req :Request, res:Response) => {
//   res.send('Welcome assignment 3')
// })
// //5. Delete Book
// app.delete('/api/books/:bookId', (req :Request, res:Response) => {
//   res.send('Welcome assignment 3')
// })
// //6. Borrow a Book
// app.post('/api/borrow', (req :Request, res:Response) => {
//   res.send('Welcome assignment 3')
// })
// //7. Borrowed Books Summary (Using Aggregation)
// app.get('/api/borrow', (req :Request, res:Response) => {
//   res.send('Welcome assignment 3')
// })
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const book_routes_1 = __importDefault(require("./routes/book.routes"));
const borrow_routes_1 = __importDefault(require("./routes/borrow.routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
// Create handler for GET request /
const getRootController = (req, res) => {
    // Send response text
    res.send('Weclome to Assignment 3 !!!');
};
// Route handler for /
app.get('/', getRootController);
app.use("/api", book_routes_1.default);
app.use("/api", borrow_routes_1.default);
exports.default = app;
// // routes
// app.use('/api', bookRoutes);
// app.use('/api', borrowRoutes);
// // 404 middleware
// app.use(notFound);
// // error handler
// app.use(globalErrorHandler);
