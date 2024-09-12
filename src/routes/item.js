import { Router } from "express";
import Instrument from '../models/item.js'
import { getItem, getItems, updateItem, postItem, deleteItem} from "..controllers/item.js"

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

router.get('/', getItems, async (req, res) => {
    try {
        const instruments = await Instrument.find()
        if(instruments.length === 0 ){
            return res.status(204).json([])
        }
        res.json(instruments)
    } catch (error) {
        res.status(500).json({message: error.message })
    }
}) 

router.get('/:id', getItem, async(req, res) => {
    res.json(res.book)
}) 

router.post('/', postItem, async (req, res) => {
    const {name,marca,tipo,subtipo,descripcion,precio,img_url } = req?.body
    
    if(!name || !marca || !tipo || !subtipo || !descripcion || !precio || !img_url) {
        return res.status(400).json({message: 'Todos los campos son obligatorios.'})
    }

    const instrument = new Instrument(
        {
            name,
            marca,
            tipo,
            subtipo,
            descripcion,
            precio,
            img_url
        }
    )

    try {
        const newInstrument = await instrument.save()
        res.status(201).json(newInstrument)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})  

router.put('/:id', updateItem, async(req, res) => {
    try {
        const instrument = res.instrument
        instrument.name  = req.body.name || instrument.name;
        instrument.marca  = req.body.marca || instrument.marca;
        instrument.tipo  = req.body.tipo || instrument.tipo;
        instrument.subtipo  = req.body.subtipo || instrument.subtipo;
        instrument.descripcion  = req.body.descripcion || instrument.descripcion;
        instrument.precio  = req.body.precio || instrument.precio;                
        instrument.img_url  = req.body.img_url || instrument.img_url;  
        
        const updatedInstrument = await instrument.save()
        res.json(updatedInstrument)
    } catch (error) {
        res.status(400).json({message: error.message})    
    }
})

router.delete('/:id', deleteItem, async(req, res) => {
    try {
        const instrument = res.instrument
        await instrument.deleteOne({_id: book._id})
        res.json({message: 'El instrumento ha sido eliminado correctamente'})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

export default router;