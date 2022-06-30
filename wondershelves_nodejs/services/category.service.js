const categoryRepository = require('../repositories/category.repository');

class CategoryService{
    constructor(){}

    async getCategories(){
        return await categoryRepository.getCategories();
    }
}

module.exports = new CategoryService();