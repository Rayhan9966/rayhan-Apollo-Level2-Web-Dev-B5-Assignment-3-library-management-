import mongoose, { Schema, Document } from "mongoose";

enum Genre {
  FICTION = "FICTION",
  NON_FICTION = "NON_FICTION",
  SCIENCE = "SCIENCE",
  HISTORY = "HISTORY",
  BIOGRAPHY = "BIOGRAPHY",
  FANTASY = "FANTASY"
}

export interface IBook extends Document {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      enum: Object.values(Genre),
      required: true
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true }
  },
  { timestamps: true }
);

// Mongoose Middleware
bookSchema.pre("save", function (next) {
  if (this.copies <= 0) this.available = false;
  next();
});

// Instance method
bookSchema.methods.updateAvailability = function () {
  this.available = this.copies > 0;
};

export const Book = mongoose.model<IBook>("Book", bookSchema);
