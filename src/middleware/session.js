import { verifyToken } from "../utils/jwt.handle.js"

const checkJwt = (req, res, next) => {
    try {
        const userJwt = req.headers.authorization || ''
        const jwt = userJwt.split(' ').pop()
        
        const isUser = verifyToken(`${jwt}`)
      
        if (!isUser) {
            res.status(401)
            res.send("sesion invalida")
        } else {
            req.user = isUser
            next()
        }
    } catch (e) {
        res.status(400).send("No tiene autorizacion")
    }
}

export { checkJwt }