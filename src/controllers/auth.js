import express from "express"
import { registerNewUser, loginUser } from "../services/auth.service.js"

const register = async ({ body }, res) => {
    const response = await registerNewUser(body)
    res.send(response)
}

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const hashedPassword = hashPassword(password)

    } catch (error) {

    }
}

export { register, login }