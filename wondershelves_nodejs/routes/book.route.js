const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");
const auth = require("../middleware/auth");
/**
 * @swagger
 * /api/books/page={page}/limit={limit}:
 *  get:
 *    summary: get list of book
 *    description: Use to request all books
 *    tags: [Books]
 *    parameters:
 *        - in: path
 *          name: page
 *          description: book page
 *          schema:
 *            type: string
 *        - in: path
 *          name: limit
 *          description: page limit
 *          schema:
 *            type: string
 *    responses:
 *      '200':
 *        description: Successful get books
 */
router.get("/books/page=:page/limit=:limit", (req, res) => {
  bookController.getBooks(req.params.page, req.params.limit).then((data) => res.json(data));
});
/**
 * @swagger
 *  /api/book/bookId={id}:
 *    get:
 *      summary: get book by id
 *      tags: [Books]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: book id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Successful get a book
 *        404:
 *          description: Book was not found
 *
 */
router.get("/book/bookId=:id", (req, res) => {
  bookController.getBook(req.params.id).then((data) => res.json(data));
});
/**
 * @swagger
 *  /api/book/categoryId={id}:
 *    get:
 *      summary: get list of book by category id
 *      tags: [Books]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: category id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Successful get books
 *        404:
 *          description: CategoryId was not found
 *
 */
router.get("/book/categoryId=:id", (req, res) => {
  bookController.getBooksByCategory(req.params.id).then((data) => res.json(data));
});
/**
 * @swagger
 * /api/book:
 *   post:
 *     summary: create book
 *     tags: [Books]
 *     produces: [application/json]
 *     consumes: [application/json]
 *     parameters:
 *       - in : body
 *         name: body
 *         description: book object
 *         schema:
 *           type: object
 *           properties:
 *              book:
 *                type: object
 *                $ref: '#/definitions/Book'
 *         required: true
 *     responses:
 *       200:
 *         description: successful operation
 *         schema:
 *           type: array
 *           items:
 *              $ref: '#/definitions/Response'
 *       400:
 *         description: Book can not be found
 *       500:
 *         description: Book can not be found
 *         schema:
 *           $ref: '#/definitions/InvalidResponse'
 */
router.post("/book", auth, (req, res) => {
  bookController.createBook(req.body.book).then((data) => res.json(data));
});

/**
 * @swagger
 * /api/book/{id}:
 *   put:
 *     summary: update book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: book id need to be updated
 *         type: string
 *       - in: body
 *         name: body
 *         required: true
 *         description: book object
 *         schema:
 *            type: object
 *            properties:
 *              book:
 *                type: object
 *                $ref: '#/definitions/Book'
 *     responses:
 *       200:
 *         decsription: The post was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Response'
 *       404:
 *         description: Book was not found
 *       500:
 *         description: Some errors happend
 *         schema:
 *           $ref: '#/definitions/InvalidResponse'
 */
router.put("/book/:id",auth, (req, res) => {
  console.log(req.params.id);
  bookController
    .updateBook(req.params.id, req.body.book)
    .then((data) => res.json(data));
});
/**
 * @swagger
 *  /api/book/{id}:
 *    delete:
 *      summary: remove book
 *      tags: [Books]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: book id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Book was deleted
 *        404:
 *          description: Book was not found
 *
 */
router.delete("/book/:id",auth, (req, res) => {
  bookController.deleteBook(req.params.id).then((data) => res.json(data));
});

/**
 * @swagger
 * definitions:
 *   Book:
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
