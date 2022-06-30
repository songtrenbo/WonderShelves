const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: register a new user
 *     tags: [Users]
 *     produces: [application/json]
 *     consumes: [application/json]
 *     parameters:
 *       - in : body
 *         name: body
 *         description: user object
 *         schema:
 *           type: object
 *           properties:
 *              user:
 *                type: object
 *                $ref: '#/definitions/User'
 *         required: true
 *     responses:
 *       200:
 *         description: successful operation
 *         schema:
 *           type: array
 *           items:
 *              $ref: '#/definitions/Response'
 *       400:
 *         description: User can not be found
 *       500:
 *         description: User can not be found
 *         schema:
 *           $ref: '#/definitions/InvalidResponse'
 */
router.post("/register", (req, res) => {
  userController.register(req.body.user).then((data) => res.json(data));
});
/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: login
 *     tags: [Users]
 *     produces: [application/json]
 *     consumes: [application/json]
 *     parameters:
 *       - in : body
 *         name: body
 *         description: user object
 *         schema:
 *              $ref: '#/definitions/Login'
 *         required: true
 *     responses:
 *       200:
 *         description: successful operation
 *         schema:
 *           type: array
 *           items:
 *              $ref: '#/definitions/ResponseLogin'
 *       400:
 *         description: Wrong Username or Password
 *       500:
 *         description: User can not be found
 *         schema:
 *           $ref: '#/definitions/InvalidResponse'
 */
router.post("/login", (req, res) => {
  console.log("=============login: ", req.body);
  userController.login(req.body).then((data) => res.json(data));
});
/**
 * @swagger
 * definitions:
 *   User:
 *    type: object
 *    properties:
 *      fullName:
 *         type: string
 *      email:
 *         type: string
 *      password:
 *         type: string
 *   Login:
 *    type: object
 *    properties:
 *      email:
 *         type: string
 *      password:
 *         type: string
 *   Response:
 *    type: object
 *    properties:
 *      _id:
 *         type: string
 *      fullName:
 *         type: string
 *      email:
 *         type: string
 *      password:
 *         type: string
 *      token:
 *         type: string
 *      roles:
 *         type: string
 *   ResponseLogin:
 *    type: object
 *    properties:
 *      token:
 *         type: string
 *
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
