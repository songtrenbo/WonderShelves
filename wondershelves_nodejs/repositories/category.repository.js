const { connectDB } = require("../config/db.config");
const {Category} = require("../models/category.model");
const logger = require("../logger/api.logger");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

class CategoryRepository {
  constructor() {
    connectDB();
  }

  async getCategories() {
    let data = {};
    try {
      data = await Category.find({});
    } catch (err) {
      logger.error("Error: " + err);
    }
    return data;
  }
 
}

module.exports = new CategoryRepository();
