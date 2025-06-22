// import globalErrorHandler from './middleware/globalErrorHandler';
// import notFound from './middleware/notFound';

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
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.routes";
import borrowRoutes from "./routes/borrow.routes";
const app = express();
dotenv.config();


app.use(express.json());

// Create handler for GET request /
const getRootController = (req: Request, res: Response) => {
  // Send response text
  res.send('Weclome to Assignment 3 !!!')
}
// Route handler for /
app.get('/', getRootController)
app.use("/api", bookRoutes);
app.use("/api", borrowRoutes);

export default app;
















// // routes
// app.use('/api', bookRoutes);
// app.use('/api', borrowRoutes);

// // 404 middleware
// app.use(notFound);

// // error handler
// app.use(globalErrorHandler);
