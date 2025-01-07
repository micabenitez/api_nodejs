import { Router } from "express";
import { getItems, getItem, postItem, updateItem, deleteItem } from "../controllers/item.js"; 
import { checkJwt } from "../middleware/session.js";

const router = Router()

//router.get('/', checkJwt, getItems) 

router.get('/', getItems) 

router.get('/:id', getItem)

router.post('/', postItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

export {router};