import { Router } from "express";
import { getItems, getItem, postItem, updateItem, deleteItem } from "../controllers/item.js"; 
import { checkJwt } from "../middleware/session.js";

const router = Router()

//router.get('/', checkJwt, getItems) 
/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *         - stock
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the item
 *         marca:
 *           type: string
 *         tipo:
 *           type: string
 *         subtipo:
 *           type: string
 *         description:
 *           type: string
 *           description: The description of the item
 *         price:
 *           type: number
 *           description: The price of the item
 *         imgUrl:
 *           type: string
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: The items managing API
 */

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Returns the list of all the items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: The list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get('/', getItems) 

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Get the item by id
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item id
 *     responses:
 *       200:
 *         description: The item description
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.get('/:id', getItem, async(req, res) => {
    res.json(res.book)
})

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The item name
 *       - in: path
 *         name: marca
 *         schema:
 *           type: string
 *         required: true
 *         description: The item marca
 *       - in: path
 *         name: tipo
 *         schema:
 *           type: string
 *         required: true
 *         description: The item tipo
 *       - in: path
 *         name: subtipo
 *         schema:
 *           type: string   
 *         required: true
 *         description: The item subtipo
 *       - in: path
 *         name: description
 *         schema:
 *           type: string
 *         required: true
 *         description: The item description
 *       - in: path
 *         name: price
 *         schema:
 *           type: number
 *         required: true
 *         description: The item price 
 *       - in: path
 *         name: imgUrl
 *         schema:
 *           type: string
 *         required: true
 *         description: The item imgUrl * 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The created item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.post('/', postItem)

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Update an existing item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The updated item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.put('/:id', updateItem)

/**
 *  @swagger
 * /items/{id}:
 *   delete:
 *     summary: Remove the item by id
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The item id
 *     responses:
 *       200:
 *         description: The item deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.delete('/:id', deleteItem)

export {router};