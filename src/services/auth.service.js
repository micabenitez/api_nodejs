import { UserModel } from "../models/user.model.js"
import { encrypt, verified } from "../utils/bcrypt.handle.js"
import { generateToken } from "../utils/jwt.handle.js"


const registerNewUser = async ({ email, password, name }) => {
    const checkIds = await UserModel.findOne({ email })
    if (checkIds) return "El usuario ya existe."

    const passHash = await encrypt(password)
    const registeredUser = await UserModel.create({ email, password: passHash, name })
    return registeredUser
}

const loginUser = async ({ email, password }) => {
    const checkIds = await UserModel.findOne({ email })
    if (!checkIds) return "El usuario no existe."

    const passwordHash = checkIds.password
    const isCorrect = await verified(password, passwordHash)
    if(!isCorrect) return "Contraseña incorrecta"

    const token = await generateToken(checkIds.email)
    
    const data = {
        token,
        user: checkIds
    }
    return data
}

export { registerNewUser, loginUser }