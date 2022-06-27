const {connectDB} = require('../config/db.config');
const {Book} = require('../models/book.model');
const logger = require('../logger/api.logger');

class BookRepository{
    constructor(){
        connectDB();
    }

    async getBooks(){
        const books = await Book.find({});
        return books;
    }

    async createBook(book){
        let data = {};
        try {
            data = await Book.create(book);
        } catch (err) {
            logger.error('Error: ' + err);
        }
        return data;
    }

    async updateBook(book){
        let data = {};
        try {
            data = await Book.updateOne(book);
        } catch(err) {
            logger.error('Error: ' + err);
        }
        return data;
    }

    async deleteBook(bookId) {
        let data = {};
        try {
            data = await Book.deleteOne({_id: bookId});
        } catch (err) {
            logger.error('Error: ' + err);
        }
        return {status: `${data.deletedCound > 0 ? true : false}`};
    }
}

module.exports = new BookRepository();
