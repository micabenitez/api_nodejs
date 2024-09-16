import { config } from 'dotenv';
import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

config()
const JWT_SECRET = process.env.JWT_SECRET

const generateToken = async (id) => {
    const jwt = sign({ id }, JWT_SECRET)
    return jwt
}

const verifyToken = async (jwt) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
}

export { generateToken, verifyToken }