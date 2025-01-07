import app from "../app"
import request from "supertest"
import { ItemModel } from "../models/item"

describe("GET /items", () => {
    test("should response with 200 and get all items", async () => {
        const res = await request(app).get("/items")
        expect(res.statusCode).toBe(200)
        expect(res.body.response.length).toBeGreaterThan(0);
    })

    test("should get one item by existing id ", async () => {
        const res = await request(app).get("/items/674e19d7641b024658562169")
        expect(res.statusCode).toBe(200)
        expect(res.body._id).toBe("674e19d7641b024658562169")
    })

    test("get item by non existing id should response with 404", async () => {
        const res = await request(app).get("/items/677c728b80ca03643e54d8a3")
        expect(res.statusCode).toBe(404)
    })
})

describe("POST /items", () => {
    test("create item with empty fields should response with 400", async () => {
        const newItem = { 
            name: "",
            marca: "",
            tipo: "",
            subtipo: "",
            descripcion: "",
            precio: "",
            img_url: ""
        }
        const res = await request(app).post("/items").send(newItem)
        expect(res.statusCode).toBe(400)
    })

    test("create item with an empty field should response with 400", async () => {
        const newItem = { 
            name: "Fender",
            marca: "Fender",
            tipo: "guitarra",
            subtipo: "guitarra electrica",
            descripcion: "guitarra",
            precio: 1000,
            img_url: ""
        }
        const res = await request(app).post("/items").send(newItem)
        expect(res.statusCode).toBe(400)
    })

    test("create item with valid fields should response with 201", async () => {
        const newItem = { 
            name: "test",
            marca: "Fender",
            tipo: "guitarra",
            subtipo: "guitarra electrica",
            descripcion: "guitarra",
            precio: 1000,
            img_url: "test"
        }
        const res = await request(app).post("/items").send(newItem)
        expect(res.statusCode).toBe(201)
    })
})

describe("PUT /items/:id", () => {
    let item;
    beforeEach(async () => {
        item = await ItemModel.create({ name: "test", marca: "Fender", tipo: "guitarra", subtipo: "guitarra electrica", descripcion: "guitarra", precio: 1000, img_url: "test" })
    })

    afterEach(async () => {
        await ItemModel.findByIdAndDelete(item._id)
    })

    test("update item with valid field should response with 200", async () => {
        const res = await request(app).put(`/items/${item._id}`).send({
            name: "updated name"
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.name).toBe("updated name")
    })
})

describe("DELETE /items/:id", () => {
    let item;
    let response;
    beforeEach(async () => {
        item = await ItemModel.create({ name: "test", marca: "Fender", tipo: "guitarra", subtipo: "guitarra electrica", descripcion: "guitarra", precio: 1000, img_url: "test" })
        response = await request(app).delete(`/items/${item._id}`).send()
    })

    test("delete item should response with 200", async () => {
        const foundItem = await ItemModel.findById(item._id)
        expect(foundItem).toBeNull()
        expect(response.statusCode).toBe(200)
    })
})

afterAll(async () => {
    await ItemModel.deleteMany({ name: "test" })
})