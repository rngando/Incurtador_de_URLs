
const { nanoid, customAlphabet } = require("nanoid")


const caracteres = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

async function generateUniqueId(db) {
    let id;
    let exists = true;

    while (exists) {
        id = nanoid(6);
        exists = await db.findOne({
            where: { url_short: id }
        })
        if (exists) {
            console.log("[ERRO] ID já existe, gerando outro...")
        }
    }

    return id
} 

module.exports = { generateUniqueId }
