db = db.getSiblingDB("plp_bookstore"); // switch to or create database

db.books.insertMany([
 {
    title: "The AI Revolution",
    author: "Jane Smith",
    genre: "Technology",
    published_year: 2022,
    price: 25.99,
    in_stock: true,
    pages: 320,
    publisher: "TechBooks Ltd"
  },
  {
    title: "Whispers of the Wild",
    author: "John Doe",
    genre: "Adventure",
    published_year: 2019,
    price: 18.50,
    in_stock: true,
    pages: 280,
    publisher: "Nature House"
  },
  {
    title: "Dreams and Dragons",
    author: "Emily Clark",
    genre: "Fantasy",
    published_year: 2020,
    price: 22.00,
    in_stock: false,
    pages: 410,
    publisher: "Fable Press"
  },
  {
    title: "History of Innovation",
    author: "Mark Andrews",
    genre: "History",
    published_year: 2018,
    price: 30.00,
    in_stock: true,
    pages: 500,
    publisher: "Historic Reads"
  },
  {
    title: "Cooking with Passion",
    author: "Chef Anna",
    genre: "Cooking",
    published_year: 2021,
    price: 16.75,
    in_stock: true,
    pages: 180,
    publisher: "Culinary Press"
  },
  {
    title: "The Silent Planet",
    author: "Chris Nolan",
    genre: "Science Fiction",
    published_year: 2023,
    price: 28.99,
    in_stock: false,
    pages: 350,
    publisher: "Galaxy Publishers"
  },
  {
    title: "Mindful Living",
    author: "Lara Zen",
    genre: "Self-help",
    published_year: 2020,
    price: 14.99,
    in_stock: true,
    pages: 200,
    publisher: "Peace Press"
  },
  {
    title: "Fast Lane Finance",
    author: "Kevin Lee",
    genre: "Finance",
    published_year: 2022,
    price: 19.99,
    in_stock: true,
    pages: 275,
    publisher: "Money Matters Media"
  },
  {
    title: "A Guide to Python",
    author: "Susan Byte",
    genre: "Programming",
    published_year: 2021,
    price: 27.50,
    in_stock: true,
    pages: 330,
    publisher: "CodeCraft"
  },
  {
    title: "The Lost Heir",
    author: "Tara Vance",
    genre: "Mystery",
    published_year: 2017,
    price: 12.99,
    in_stock: false,
    pages: 290,
    publisher: "Dark Ink"
  }
]);