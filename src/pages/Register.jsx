import { Link } from "react-router-dom"
import "../styles/login.css"
import { useState } from "react"
import GuestHeader from "../components/GuestHeader"
import Footer from "../components/Footer"

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        posisi: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        const data = await res.json()
        console.log(data)
    }

    return(
        <>
    <main>
        <section className="login-form">
            <div className="form-card">
                <div className="form-header">
                    <h1>Buat Akun</h1>
                    <p> Mulai perjalanan belajarmu bersama MentorHub</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" id="name" placeholder="Masukkan Nama" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email" placeholder="Masukkan Email" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="password" placeholder="Masukkan Password" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Position</label>
                        <select name="posisi" id="position" onChange={handleChange}>
                            <option value="">-- Pilih Posisi --</option> 
                            <option value="mentor">Mentor</option> 
                            <option value="mentee">Mentee</option> 
                        </select>
                    </div>
                    <button type="submit">Daftar Sekarang</button>
                </form>
                <p>Dengan melanjutkan, Anda menyetujui syarat & ketentuan dan kebijakan privasi MentorHub.</p>
            </div>
        </section>
    </main>
</>
    )
}

export default Register