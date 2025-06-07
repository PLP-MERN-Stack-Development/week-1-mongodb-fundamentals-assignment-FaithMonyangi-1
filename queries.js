
// 📘 Task 2: Basic CRUD


// 1. Find all books in a specific genre (e.g., Fantasy)
db.books.find({ genre: "Fantasy" });

// 2. Find books published after a certain year (e.g., 2020)
db.books.find({ published_year: { $gt: 2020 } });

// 3. Find books by a specific author (e.g., "Jane Smith")
db.books.find({ author: "Jane Smith" });

// 4. Update the price of a specific book (e.g., "Mindful Living")
db.books.updateOne(
  { title: "Mindful Living" },
  { $set: { price: 17.99 } }
);

// 5. Delete a book by its title (e.g., "The Lost Heir")
db.books.deleteOne({ title: "The Lost Heir" });

/////////////////////////
// 🧠 Task 3: Advanced Queries
/////////////////////////

// 1. Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 2. Use projection to return only the title, author, and price fields
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 3. Sort books by price (ascending)
db.books.find().sort({ price: 1 });

// 4. Sort books by price (descending)
db.books.find().sort({ price: -1 });

// 5. Pagination – Page 1 (first 5 books)
db.books.find().limit(5);

// 6. Pagination – Page 2 (skip first 5, then next 5)
db.books.find().skip(5).limit(5);

/////////////////////////
// 🔄 Task 4: Aggregation Pipeline
/////////////////////////

// 1. Calculate average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// 2. Find the author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

/////////////////////////
// ⚙️ Task 5: Indexing
/////////////////////////

// 1. Create an index on the title field
db.books.createIndex({ title: 1 });

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Use explain() to demonstrate performance improvement
db.books.find({ title: "The AI Revolution" }).explain("executionStats");
