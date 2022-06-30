const bookService = require('../services/book.service');
const logger = require('../logger/api.logger');

class BookController{
    constructor(){}
    async getBooks(page, limit){
        logger.info('Controller: getBooks');
        return await bookService.getBooks(page, limit);
    }
    async getBooksByCategory(categoryId){
        logger.info('Controller: getBooksByCategory', categoryId);
        return await bookService.getBooksByCategory(categoryId);
    }
    async getBook(bookId){
        logger.info('Controller: getBook', bookId);
        return await bookService.getBook(bookId);
    }

    async createBook(book){
        logger.info('Controller: createBook', book);
        console.log("BODY BOOK: "+book);
        return await bookService.createBook(book);
    }

    async updateBook(bookId, book){
        logger.info('Controller: updateBook', book);
        return await bookService.updateBook(bookId, book);
    }

    async deleteBook(bookId){
        logger.info('Controller: deleteBook', bookId);
        return await bookService.deleteBook(bookId);
    }
}

module.exports = new BookController();