import { Router } from "express";
import { readdirSync } from "fs"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const PATH_ROUTER = dirname(__filename);

const router = Router()

const cleanFile = (filename) => {
    const file = filename.split(".").shift()
    return file
}

readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName = cleanFile(filename)
    console.log(`clean name: ${cleanName}`)
    if(cleanName !== 'index') {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export { router }