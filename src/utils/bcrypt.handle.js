import { hash, compare } from "bcrypt";

const saltRounds = 10

const encrypt = async (pass) => {
    const passwordHash = await hash(pass, saltRounds)
    return passwordHash;
}

const verified = async (pass, passHash) => {
    const isCorrect = await compare(pass, passHash)
    return isCorrect
}

export { encrypt, verified }

