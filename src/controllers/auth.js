import express from "express"
import { registerNewUser, loginUser } from "../services/auth.service.js"

const register = async ({ body }, res) => {
    const response = await registerNewUser(body)
    res.send(response)
}

const login = async ({ body }, res) => {
    const response = await loginUser(body)
    res.send(response)
}

export { register, login }