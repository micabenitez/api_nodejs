// comunicacion con la db
import { ItemModel } from "../models/item.js"

const insertProduct = async (item) => {
    const res = await ItemModel.create(item)
    return res
}

const getProduct= async (id) => {
    const res = await ItemModel.findOne({_id:id})
    return res
}
const getProducts = async () => {
    const res = await ItemModel.find({}) // todos los items
    return res
}

const updateProduct = async (item) => {
    const res = await ItemModel.updateOne(item)
    return res
}

const deleteProduct= async (item) => {
    const res = await ItemModel.create(item)
    return res
}

export { insertProduct, getProduct, getProducts, updateProduct, deleteProduct } 