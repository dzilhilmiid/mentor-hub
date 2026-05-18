import { Link } from "react-router-dom"
import "../styles/login.css"

function Register() {
    return(
<>
    <header className="login-header">
        <h1>MentorHub</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/mentor">Mentor</Link></li>
                <li><Link to="/class">Kelas</Link></li>
                <li><Link to="/about">Tentang</Link></li>
                <li><Link to="/contact">Kontak</Link></li>
                <li><Link to="/book">Pesan</Link></li>
            </ul>
            <Link to="/login">Masuk Sekarang</Link>
        </nav>
    </header>
    <main>
        <section className="login-form">
            <div className="form-card">
                <div className="form-header">
                    <h1>Buat Akun</h1>
                    <p> Mulai perjalanan belajarmu bersama MentorHub</p>
                </div>
                <form action="">
                    <div className="form-group">
                        <label for="">Email</label>
                        <input type="email" id="email" placeholder="Masukkan Email" required />
                    </div>
                    <div className="form-group">
                        <label for="">Password</label>
                        <input type="password" id="password" placeholder="Masukkan Password" />
                    </div>
                    <div className="form-group">
                        <label for="">Position</label>
                        <select name="" id="position">
                            <option value="">-- Pilih Posisi --</option> 
                            <option value="">Mentor</option> 
                            <option value="">Mentee</option> 
                        </select>
                    </div>
                    <button type="submit">Daftar Sekarang</button>
                </form>
                <p>Dengan melanjutkan, Anda menyetujui syarat & ketentuan dan kebijakan privasi MentorHub.</p>
            </div>
        </section>
    </main>
    <footer className="footer">
        <div className="footer1">
            <h2>MentorHub</h2>
            <p>Platform yang menghubungkan mentee dengan mentor berpengalaman untuk mempercepat perkembangan karier dan skill.</p>
        </div>
        <div className="footer2">
            <h3>Quick Link</h3>
            <a href="/">Home</a>
            <a href="/mentor">Mentor</a>
            <a href="/class">Kelas</a>
            <a href="/about">Tentang</a>
            <a href="/contact">Contact</a>
            <a href="/book">Book</a>
        </div>
        <div className="footer3">
            <h3>Kontak</h3>
            <p>📧 support@mentorhub.com</p>
            <p>📱 +62 812-0000-0000</p>
            <p>📍 Indonesia</p>
        </div>
    </footer>
</>
    )
}

export default Register