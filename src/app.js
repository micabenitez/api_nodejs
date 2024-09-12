import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import instrumentRoutes from '../src/routes/product.routes.js'
import bodyParser from "body-parser";
config()

const app = express();
const port = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection
//middleware para parsear los elems 
app.use(bodyParser.json())

app.use('/instruments', instrumentRoutes)

app.listen(port, () => {
    console.log(port)
})