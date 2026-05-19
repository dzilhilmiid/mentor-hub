import { Link } from "react-router-dom"
import"../styles/login.css"
import { useState } from "react"


function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        const data = await res.json()

        localStorage.setItem("user", JSON.stringify(data))
        window.location.href = "/"

        console.log(data)
    }

    return(
        <>
    <main>
        <section className="login-form">
            <div className="form-card">
                <div className="form-header">
                    <h1>Selamat Datang</h1>
                    <p>Masuk untuk melanjutkan ke MentorHub</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email" placeholder="Masukkan Email" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="password" placeholder="Masukkan Password" onChange={handleChange} />
                    </div>
                    <button type="submit">Masuk</button>
                </form>
                <p>
                    Belum punya akun?{" "} <Link to="/register" className="register-link"> Register </Link>
                </p>
            </div>
        </section>
    </main>
</>
    )
}

export default Login