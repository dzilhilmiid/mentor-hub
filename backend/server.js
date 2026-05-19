const express = require("express")
const cors = require("cors")
const pool = require("./db")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Backend berjalan")
})

app.get("/test-db", async (req, res) => {
    const result = await pool.query("SELECT NOW()")
    res.json(result.rows)
})

app.post("/register", async (req, res) => {
    try {
        const { name, email, password, posisi } = req.body
        const result = await pool.query(
            "INSERT INTO users (name, email, password, posisi) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, email, password, posisi]
        )
        res.json(result.rows[0])
    } catch (err) {
        console.log(err.message)
    }
})

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )
        if (user.rows.length === 0) {
            return res.status(404).json("email tidak ditemukan")
        }
        if (user.rows[0].password !== password) {
            return res.status(401).json("Passwor salah")
        }
        res.json(user.rows[0])
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(5000, () => {
    console.log("Server berjalan di port 5000")
})