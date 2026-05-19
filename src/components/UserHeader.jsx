import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import"../styles/userheader.css"

function UserHeader() {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("user")

        navigate("/login")

        // refresh agar header berubah ke guest
        window.location.reload()
    }
    
    return (
        <header className="user-header">
            <h1>MentorHub</h1>

            <nav className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/mentor">Mentor</Link></li>
                    <li><Link to="/class">Kelas</Link></li>
                    <li><Link to="/about">Tentang</Link></li>
                    <li><Link to="/contact">Kontak</Link></li>
                    <li><Link to="/book">Pesan</Link></li>
                </ul>

                <div className="profile-menu">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="Profile"
                        className="profile-img"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    />

                    {dropdownOpen && (
                        <div className="dropdown">
                            <Link to="/profile">Profile</Link>
                            <Link to="/setting">Setting</Link>
                            <button onClick={handleLogout} className="logout-btn">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default UserHeader