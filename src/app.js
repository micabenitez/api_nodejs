import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import { router as ItemRouter } from "./routes/item.js";
import { router as AuthRouter } from "./routes/auth.js"
import { specs } from "./docs/swagger.js";
import cors from "cors"
import swaggerUi from "swagger-ui-express"
config()

const app = express();
const corsOptions ={
    origin:'*', 
    credentials:true,           
    optionSuccessStatus:200,
 }
app.use(cors((corsOptions)))
app.use(express.json())

const port = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection

//middleware para parsear los elems 
// app.use(bodyParser.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
app.use("/items", ItemRouter)
app.use("/auth", AuthRouter)

app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`)
})