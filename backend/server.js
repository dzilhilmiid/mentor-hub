const express = require("express")
const cors = require("cors")
const pool = require("./db")

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.send("Backend berjalan")
})

app.get("/test-db", async (req, res) => {
    const result = await pool.query("SELECT NOW()")
    res.json(result.rows)
})

app.listen(5000, () => {
    console.log("Server berjalan di port 5000")
})