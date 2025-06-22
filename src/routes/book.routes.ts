// import express from "express";
// import {
//   createBook,
//   getBooks,
//   getBookById,
//   updateBook,
//   deleteBook
// } from "../controllers/book.controller";

// const router = express.Router();

// router.post("/api/books", createBook);
// router.get("/api/books", getBooks);
// router.get("/api/books/:bookId", getBookById);
// router.put("/api/books/:bookId", updateBook);
// router.delete("/api/books/:bookId", deleteBook);

// export default router;
import express from "express";
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} from "../controllers/book.controller";

const router = express.Router();
router.post("/books", createBook);
router.get("/books", getBooks);
router.get("/books/:bookId", getBookById);
router.put("/books/:bookId", updateBook);
router.delete("/books/:bookId", deleteBook);

export default router;
