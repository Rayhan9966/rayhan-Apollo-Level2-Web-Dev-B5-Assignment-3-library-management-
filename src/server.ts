// import { MongoClient, ServerApiVersion } from "mongodb";
// import app from "./app";


// let server;
// const port = 5000

// const uri = "mongodb+srv://mongodb:mongodb@cluster0.gswfx77.mongodb.net/librarydata?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });




// const bootstrap = async () => {
//     await client.connect();
//     console.log("connencted to mongodb");

//     const db=await client.db("librarydata");
//     const collection=await db.collection("book").insertOne({
//       "title": "The Theory of Everything",
//   "author": "Stephen Hawking",
//   "genre": "SCIENCE",
//   "isbn": "9780553380163",
//   "description": "An overview of cosmology and black holes.",
//   "copies": 5,
//   "available": true
//     });
//     console.log(collection,"collection");
//      app.listen(port, () => {
         
//         console.log(`Example app listening on port ${port}`)
//     })
// }
// bootstrap()


import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
});

