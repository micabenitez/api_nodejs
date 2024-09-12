import { Schema, model } from "mongoose";

const itemSchema = new Schema(
    {
        name: String,
        marca: String,
        tipo: String, // guitarra, piano, bateria..
        subtipo: String, // guitarra electrica, acustica, etc
        descripcion: String,
        precio: Number,
        img_url: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ItemModel = model('items', itemSchema);
export { ItemModel }