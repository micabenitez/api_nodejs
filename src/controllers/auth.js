import express from "express"
import { registerNewUser, loginUser } from "../services/auth.service"

const register = async ({ body }, res) => {
    const res = await registerNewUser()
}

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const hashedPassword = hashPassword(password)

    } catch (error) {

    }
}

export { register, login }