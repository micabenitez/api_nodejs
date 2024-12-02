import { Router } from "express";
// import Instrument from '../models/item.js'
import { getItems, getItem, postItem, updateItem, deleteItem } from "../controllers/item.js"; 
import { checkJwt } from "../middleware/session.js";

const router = Router()

//router.get('/', checkJwt, getItems) 
router.get('/', getItems) 

router.get('/:id', getItem, async(req, res) => {
    res.json(res.book)
}) 

router.post('/', postItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

export {router};