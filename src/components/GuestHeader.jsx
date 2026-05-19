import { Link } from "react-router-dom"
import { useState } from "react"
import"../styles/guestheader.css"

function GuestHeader() {
    return(
        <header className="guest-header">
            <h1>MentorHub</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Tentang</Link></li>
                    <li><Link to="/contact">Kontak</Link></li>
                </ul>
                <Link to="/login">Masuk Sekarang</Link>
            </nav>
        </header>
    )
}

export default GuestHeader