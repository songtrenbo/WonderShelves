const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");
/**
 * @swagger
 * /api/categories:
 *  get:
 *    summary: get list of category
 *    description: Use to request all categories
 *    tags: [Categories]
 *    responses:
 *      '200':
 *        description: Successful get categories
 */
router.get("/categories", (req, res) => {
    categoryController.getCategories().then((data) => res.json(data));
});

/**
 * @swagger
 * definitions:
 *   Category:
 *    type: object
 *    properties:
 *      title:
 *         type: string
 *      image:
 *         type: string
 *      quantity:
 *         type: number
 *      price:
 *         type: number
 *      description:
 *         type: string
 *      categories:
 *         type: string
 *   Response:
 *    type: object
 *    properties:
 *      _id:
 *         type: string
 *      title:
 *         type: string
 *      image:
 *         type: string
 *      quantity:
 *         type: number
 *      price:
 *         type: number
 *      description:
 *         type: string
 *   InvalidResponse:
 *    type: object
 *    properties:
 *      statusCode:
 *         type: string
 *      message:
 *         type: string
 *
 */
module.exports = router;
