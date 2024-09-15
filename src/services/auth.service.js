import { UserModel } from "../models/user.model.js"
import { encrypt } from "../utils/bcrypt.handle.js"


const registerNewUser = async ({ email, password, name }) => {
    const checkIds = await UserModel.findOne({ email })
    if(checkIds) return "El usuario ya existe."

    const passHash = await encrypt(password)
    const registeredUser = await UserModel.create({email, password:passHash, name})
    return registeredUser
}

const loginUser = async () => {

}

export { registerNewUser, loginUser }