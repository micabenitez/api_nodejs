import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: String,
        marca: String,
        tipo: String, // guitarra, piano, bateria..
        subtipo: String, // guitarra electrica, acustica, etc
        descripcion: String,
        precio: Number,
        img_url: String
    }
)

module.exports = mongoose.model('Instrument', productSchema);