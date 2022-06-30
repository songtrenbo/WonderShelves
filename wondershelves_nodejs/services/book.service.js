const bookRepository = require('../repositories/book.repository');

class BookService{
    constructor(){}

    async getBooks(page, limit){
        return await bookRepository.getBooks(page, limit);
    }
    async getBooksByCategory(categoryId){
        console.log("OKK");
        return await bookRepository.getBooksByCategory(categoryId);
    }
    async getBook(bookId){
        return await bookRepository.getBook(bookId);
    }
    async createBook(book){
        return await bookRepository.createBook(book);
    }

    async updateBook(bookId, book){
        return await bookRepository.updateBook(bookId, book);  
    }

    async deleteBook(bookId){
        return await bookRepository.deleteBook(bookId);
    }
}

module.exports = new BookService();