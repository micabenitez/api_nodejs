import express from "express"

export const register = async (req, res) => {
    const { email, password } = req.body

    try {
        const hashedPassword = hashPassword(password)
    
    } catch (error) {
        
    }
}