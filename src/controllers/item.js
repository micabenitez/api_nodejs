import { insertItem } from "../services/item.service"
import handleHttp from "../utils/error.handle"

// los controlados solo reciben los datos, no deben tener logica de negocio
const getItem = (req, res) => {
    try {

    } catch (error) {
        handleHttp(res, error.message)
    }
}

const getItems = (req, res) => {
    try {

    } catch (error) {

    }
}

const updateItem = (req, res) => {
    try {

    } catch (error) {

    }
}
//           req.body o params.body
const postItem = async ({ body }, res) => {
    try {
        const createdItem = await insertItem(body)
        res.send(createdItem)
    } catch (error) {

    }
}

const deleteItem = (req, res) => {
    try {

    } catch (error) {

    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }