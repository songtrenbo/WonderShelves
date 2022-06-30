const categoryService = require('../services/category.service');
const logger = require('../logger/api.logger');

class CategoryController{
    constructor(){}
    async getCategories(){
        logger.info('Controller: getCategories');
        return await categoryService.getCategories();
    }
}

module.exports = new CategoryController();