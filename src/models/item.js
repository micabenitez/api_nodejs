import { Schema, model } from "mongoose";

const itemSchema = new Schema(
    {
        name: {type: String, required: true},
        marca:{type: String, required: true},
        tipo: {type: String, required: true}, // guitarra, piano, bateria..
        subtipo: {type: String, required: true}, // guitarra electrica, acustica, etc
        descripcion: {type: String, required: true},
        precio: {type: Number, required: true},
        img_url:  {type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ItemModel = model('items', itemSchema);
export { ItemModel }