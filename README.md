=>GitHub Repository Link :https://github.com/Rayhan9966/rayhan-Apollo-Level2-Web-Dev-B5-Assignment-3-library-management-


=>Live Deployment Link :https://library-management-api-eosin-one.vercel.app


=>Video Explanation (Public Link):https://drive.google.com/drive/folders/1k1udCEmXzQjhA7UJVJRPQXJBBq7lRg88?usp=sharing
 # rayhan-Apollo-Level2-Web-Dev-B5-Assignment-3-library-management-



 📚 Library Management API
A full-featured REST API for managing books and borrow records, built with Express, TypeScript, and MongoDB (Mongoose).

✅ Features
Create, read, update, and delete books

Borrow books with business logic enforcement

Aggregated summary of borrowed books

Filtering, sorting, and pagination

Mongoose schema validation and middleware

Instance method for availability logic

🛠️ Tech Stack
Node.js

Express.js

TypeScript

MongoDB with Mongoose

dotenv for environment config

📁 Project Structure
bash
Copy
Edit
src/
├── app.ts                  # Express app setup
├── server.ts               # Entry point
├── config/
│   └── db.ts               # MongoDB connection
├── models/
│   ├── book.model.ts       # Book schema
│   └── borrow.model.ts     # Borrow schema
├── controllers/
│   ├── book.controller.ts
│   └── borrow.controller.ts
├── routes/
│   ├── book.route.ts
│   └── borrow.route.ts
├── utils/
│   └── errorHandler.ts     # (Optional) centralized error formatting
.env
🚀 Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/library-api.git
cd library-api
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create .env File
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/library-api
4. Run the Server
bash
Copy
Edit
npx ts-node-dev src/server.ts
📦 API Endpoints
🔸 Books
Method	Endpoint	Description
POST	/api/books	Create a new book
GET	/api/books	Get all books (filter/sort)
GET	/api/books/:bookId	Get book by ID
PUT	/api/books/:bookId	Update book
DELETE	/api/books/:bookId	Delete book

Query Example:
/api/books?filter=SCIENCE&sortBy=createdAt&sort=desc&limit=5

🔸 Borrow
Method	Endpoint	Description
POST	/api/borrow	Borrow a book (check copies, etc.)
GET	/api/borrow	Get summary with aggregation

📘 Sample Book Schema
json
Copy
Edit
{
  "title": "1984",
  "author": "George Orwell",
  "genre": "FICTION",
  "isbn": "9780451524935",
  "description": "Dystopian novel",
  "copies": 5
}
📘 Sample Borrow Schema
json
Copy
Edit
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
⚙️ Business Logic
Book must have enough copies to borrow

When copies reach zero, available flag is set to false

Instance method updateAvailability() handles availability logic

📊 Aggregation Example
The borrow summary uses aggregation to return:

json
Copy
Edit
[
  {
    "book": {
      "title": "The Theory of Everything",
      "isbn": "9780553380163"
    },
    "totalQuantity": 5
  }
]

