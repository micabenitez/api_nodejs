import express from "express"

const logMiddleware = async (req, res, next) => {
    const header = req.headers
    next()
    
}

export { logMiddleware }