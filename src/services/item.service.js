import { ItemModel } from "../models/item.js"

const insertProduct = async (item) => {
    const res = await ItemModel.create(item)
    return res
}

const getProduct = async (id) => {
    const res = await ItemModel.findOne({ _id: id })
    return res
}
const getProducts = async () => {
    const res = await ItemModel.find({}) // todos los items
    return res
}

const updateProduct = async (id, data) => {
    const res = await ItemModel.findOneAndUpdate({ _id: id }, data, { new: true })
    return res
}

const deleteProduct = async (id) => {
    const res = await ItemModel.deleteOne({ _id: id })
    return res
}

export { insertProduct, getProduct, getProducts, updateProduct, deleteProduct } 