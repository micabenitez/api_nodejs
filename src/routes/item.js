import { Router } from "express";
// import Instrument from '../models/item.js'
import { getItems, getItem, postItem } from "../controllers/item.js"; 

const router = Router()


// //middleware
// const getInstrument = async (req, res, next) => {
//     let instrument;
//     const { id } = req.params;
   
//     try {
//         instrument = await Instrument.findById(id)
//         if(!instrument) {
//             return res.status(404).json({message: "El instrumento no fue encontrado"})
//         }
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
   
//     res.instrument = instrument
//     next()
// }

router.get('/', getItems) 

router.get('/:id', getItem, async(req, res) => {
    res.json(res.book)
}) 

router.post('/', postItem)

// router.put('/:id', updateItem)

// router.delete('/:id', deleteItem)

export {router};