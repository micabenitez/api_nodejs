import { insertProduct, getProduct, getProducts, updateProduct, deleteProduct } from "../services/item.service.js"
import handleHttp from "../utils/error.handle.js"

// los controlados solo reciben los datos, no deben tener logica de negocio
const getItem = async ({ params }, res) => {
    try {
        const { id } = params
        const response = await getProduct(id)
        res.send(response)
    } catch (error) {
        handleHttp(res, error.message)
    }
}

const getItems = async (req, res) => {
    try {
        const response = await getProducts()
        res.send(response)
    } catch (error) {
        handleHttp(res, error.message)
    }
}

const updateItem = async ({params, body}, res) => {
    try {
        const { id } = params
        const response = await updateProduct(id, body)
        res.send(response)

    } catch (error) {
        handleHttp(res, error.message)
    }
}
//           req.body o params.body
const postItem = async ({ body }, res) => {
    try {
        const createdItem = await insertProduct(body)
        res.send(createdItem)
    } catch (error) {
        handleHttp(res, error.message)
    }
}

const deleteItem = async ({params}, res) => {
    try {
        const {id} = params
        const response = await deleteProduct(id)
        res.send(response)

    } catch (error) {
        handleHttp(res, error.message)
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }