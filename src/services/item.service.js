// comunicacion con la db
import { ItemModel } from "../models/item"

const insertItem = async (item) => {
    const res = await ItemModel.create(item)
    return res
}

export { insertItem }