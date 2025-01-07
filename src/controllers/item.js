import { insertProduct, getProduct, getProducts, updateProduct, deleteProduct } from "../services/item.service.js"
import handleHttp from "../utils/error.handle.js"

// los controlados solo reciben los datos, no deben tener logica de negocio
const getItem = async ({ params }, res) => {
    try {
        const { id } = params
        const response = await getProduct(id)
        if (!response) {
            return res.status(404).send({ error: "Item not found" })
        }
        res.send(response)
    } catch (error) {
        handleHttp(res, error.message)
    }
}

const getItems = async (req, res) => {
    try {
        const response = await getProducts()
        res.send({
            response,
            user: req.user
        })
    } catch (error) {
        handleHttp(res, error.message)
    }
}

const updateItem = async ({params, body}, res) => {
    try {
        const { id } = params
        const response = await updateProduct(id, body)
        if (!response) {
            return res.status(404).send({ error: "Item not found" })
        }
        res.send(response)

    } catch (error) {
        handleHttp(res, error.message)
    }
}
//           req.body o params.body
const postItem = async ({ body }, res) => {
    try {
        if (!body.name || !body.descripcion || !body.tipo || !body.subtipo || !body.marca || !body.precio || !body.img_url) {
            return res.status(400).send({ error: "Missing required fields" }) 
        }

        const createdItem = await insertProduct(body)
       
        res.status(201).send(createdItem)
    } catch (error) {
        handleHttp(res, error.message)
    }
}

const deleteItem = async ({params}, res) => {
    try {
        const {id} = params
        const response = await deleteProduct(id)
        if (!response) {
            return res.status(404).send({ error: "Item not found" })
        }
        res.send(response)

    } catch (error) {
        handleHttp(res, error.message)
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }