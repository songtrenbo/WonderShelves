const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");

/**
 * @swagger
 * /api/books:
 *  get:
 *    description: Use to request all books
 *    tags: [Books]
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/books", (req, res) => {
  bookController.getBooks().then((data) => res.json(data));
});


/**
 * @swagger
 * /api/book:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Book'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Book'
 *       500:
 *         description: Some server error
 */
router.post("/book", (req, res) => {
  console.log(req.body);
  bookController.createBook(req.body.book).then((data) => res.json(data));
});


router.put("/book", (req, res) => {
  bookController.updateBook(req.body.book).then((data) => res.json(data));
});
router.delete("/book/:id", (req, res) => {
  bookController.deleteBook(req.params.id).then((data) => res.json(data));
});
/**
 * @swagger
 * definitions:
 *     Book:
 *       type: object
 *       required:
 *         - userId
 *         - title
 *         - body
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         userId:
 *           type: integer
 *           description: id of author
 *         title:
 *           type: string
 *           description: title of post
 *         body:
 *           type: string
 *           descripton: content of post *
 *       example:
 *         id: 1
 *         userId: 1
 *         title: my title
 *         body: my article
 *
 */
module.exports = router;
