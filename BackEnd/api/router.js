
const express = require("express")
const { sequelize, Url } = require("../models/db")
const { generateUniqueId } = require("../utils/code")



try {
    sequelize.authenticate()
    console.log("[INFO] Conexão estabelicida.")
    sequelize.sync(({ alter: true }))
    console.log("[INFO] Tabelas criadas.")
} catch (error) {
    console.log(`[ALERT] Erro no processo ${error}`)
}

const app = express()
app.use(express.json()) // Para parsear JSON no corpo das requisições

app.get("/", (req, res) => {
    res.send("Seja muito be vindo...")
})

app.post("/shorten", async (req, res) => {
    const urlLong = await req.body.url
    
    try {
        const urlShort = await generateUniqueId(Url)
        const newUrl = await Url.create({ url_long: urlLong, url_short: urlShort })
        res.status(201).json({ url_short: urlShort })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.get("/links", async (req, res) => {
    result = []
    const urls = await Url.findAll()
    
    if (urls.length === 0) {
        return res.json({ message: "Nenhuma URL encurtada encontrada." })
    }

    for (let url of urls) {
        result.push({ url_long: url.url_long, url_short: url.url_short })
    }
    res.json(result)
})

app.get("/:code", async (req, res) => {
    const code = req.params.code

    try {
        const url = await Url.findOne({
            where: { url_short: code }
        })

        if (!url) {
            return res.status(404).json({ error: "URL não encontrada" })
        }
        // Redirecionamento real
        res.redirect(url.url_long)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = app
