const { connectDB } = require("../config/db.config");
const { Book } = require("../models/book.model");
const logger = require("../logger/api.logger");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

class BookRepository {
  constructor() {
    connectDB();
  }

  async getBooksByCategory(categoryId){
    let data = {};
    try {
      data = await Book.find({status:"active"}).where({categories: categoryId});
    } catch (err) {
      logger.error("Error: " + err);
    }
    return data;
  }
  async getBooks(page, limit) {
    let pageNumber = page || 1;
    let pageLimit = limit || 10;
    const options = {
      page: pageNumber,
      limit: pageLimit,
    };
    var data = {};
    var books = Book.aggregate();
    await Book.aggregatePaginate(books, options)
      .then(function (results) {
        data = results;
      })
      .catch(function (err) {
        logger.error("Error: " + err);
      });
    return data;
  }
  async getBook(bookId) {
    const book = await Book.findById(bookId);
    return book;
  }
  async createBook(book) {
    let data = {};
    try {
      data = await Book.create(book);
    } catch (err) {
      logger.error("Error: " + err);
    }
    return data;
  }

  async updateBook(bookId, book) {
    let data = {};
    try {
      book.updatedDate = Date.now();
      data = await Book.findByIdAndUpdate(bookId, book);
    } catch (err) {
      logger.error("Error: " + err);
    }
    return data;
  }

  async deleteBook(bookId) {
    let data = {};
    try {
      data = await Book.findByIdAndUpdate(bookId, { status: "deleted" });
    } catch (err) {
      logger.error("Error: " + err);
    }
    return { status: "deleted" };
  }
}

module.exports = new BookRepository();
