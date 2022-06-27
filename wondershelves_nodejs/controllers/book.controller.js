const bookService = require('../services/book.service');
const logger = require('../logger/api.logger');

class BookController{
    async getBooks(){
        logger.info('Controller: getBooks');
        return await bookService.getBooks();
    }

    async createBook(book){
        logger.info('Controller: createBook', book);
        console.log("BODY BOOK: "+book);
        return await bookService.createBook(book);
    }

    async updateBook(book){
        logger.info('Controller: updateBook', book);
        return await bookService.updateBook(book);
    }

    async deleteBook(bookId){
        logger.info('Controller: deleteBook', bookId);
        return await bookService.deleteBook(bookId);
    }
}

module.exports = new BookController();