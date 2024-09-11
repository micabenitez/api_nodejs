import express from "express";
import Instrument from '../models/product.model'

const router = express.Router()

//middleware
const getInstrument = async (req, res, next) => {
    let instrument;
    const { id } = req.params;

    try {
        instrument = await Instrument.findById(id)
        if(!instrument) {
            return res.status(404).json({message: "El instrumento no fue encontrado"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
   
}

router.get('/', async (req, res) => {
    try {
        const instruments = await Instrument.find()
        res(instruments)
    } catch (error) {
        res.status(500).json({message: error.message })
    }
}) 

router.post('/', async (req, res) => {
    const {name,marca,tipo,subtipo,descripcion,precio,img_url } = res?.body

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
        const newInstrument = await Instrument.save()
        res.status(201).json(newInstrument)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})  