import { hash, compare } from "bcrypt";

const saltRounds = 10

const encrypt = async (pass) => {
    const passwordHash = await hash(pass, saltRounds)
    return passwordHash;
}

const verified = () => {

}

export { encrypt, verified }

