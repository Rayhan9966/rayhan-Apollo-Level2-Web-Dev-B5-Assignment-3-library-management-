import { Request, Response } from "express";
import { Book } from "../models/book.model";
import { Borrow } from "../models/borrow.model";

export const borrowBook = async (req: Request, res: Response) => {
  const { book, quantity, dueDate } = req.body;
  const targetBook = await Book.findById(book);

  if (!targetBook || targetBook.copies < quantity) {
    return res.status(400).json({
      success: false,
      message: "Not enough copies available",
      error: "Insufficient stock"
    });
  }

  targetBook.copies -= quantity;
  targetBook.updateAvailability();
  await targetBook.save();

  const borrow = await Borrow.create({ book, quantity, dueDate });
  res.status(201).json({ success: true, message: "Book borrowed successfully", data: borrow });
};

export const getBorrowSummary = async (_req: Request, res: Response) => {
  const summary = await Borrow.aggregate([
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
};
