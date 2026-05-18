import { Link } from "react-router-dom"
import "../styles/home.css"

function Home () {
    return (
        <>
    <header className="home-header">
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

    <section className="home">
        <div className="home-above">
            <div className="home-above-left">
                <h1>Belajar Lansung
                    dari Mentor Profesional
                </h1>
                <p>
                    Tingkatkan skill Anda dengan bimbingan mentor berpengalaman di bidang teknologi, bisnis, dan desain
                </p>
                <div className="home-button">
                    <Link to="/book">Mulai Sekarang</Link>
                    <Link to="/class">Lihat Program</Link>
                </div>
            </div>
            <div className="home-above-right">
                <img src={`${import.meta.env.BASE_URL}MentorHubIcon.png`} 
                alt="icon MentorHub" />
            </div>
        </div>
        <div className="home-middle">
            <div className="home-middle-fitur">
                <div className="home-middle-fitur-header">
                    <h3>Fitur Utama</h3>
                    <p>“Jangan belajar sendirian—dapatkan mentor yang siap membimbing langkahmu”</p>
                </div>
                <div className="home-middle-fitur-list">
                    <div className="home-middle-fitur-card">
                        <div className="icon">📅</div>
                        <h4>Jadwal Fleksibel</h4>
                        <p>“Atur waktu belajar sesuai kenyamananmu tanpa bentrok jadwal.”</p>
                    </div>
                    <div className="home-middle-fitur-card">
                        <div className="icon">🎓</div>
                        <h4>Mentor Berpengalaman</h4>
                        <p>“Belajar langsung dari mentor yang ahli di bidangnya.”</p>
                    </div>
                    <div className="home-middle-fitur-card">
                        <div className="icon">💬</div>
                        <h4>Konsultasi 1-on-1</h4>
                        <p>“Dapatkan bimbingan pribadi untuk solusi yang lebih fokus dan tepat.”</p>
                    </div>
                </div>
            </div>
            <div className="home-middle-testimony">
                <div className="home-middle-testimony-header">
                    <h3>Testimony</h3>
                    <p>“Apa kata mereka tentang pengalaman belajar bersama MentorHub”</p>
                </div>
                <div className="home-middle-testimony-list">
                    <div className="home-middle-testimony-card">
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>“Mentor sangat membantu memahami materi dengan cepat.”</p>
                        <p>— Rina Putri</p>
                    </div>
                    <div className="home-middle-testimony-card">
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>“Saya berhasil upgrade skill dalam 1 bulan!”</p>
                        <p>— Andi Pratama</p>
                    </div>
                    <div className="home-middle-testimony-card">
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>“Platform terbaik untuk belajar langsung dari expert.”</p>
                        <p>— Budi Santoso</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="footer">
        <div className="footer1">
            <h2>MentorHub</h2>
            <p>Platform yang menghubungkan mentee dengan mentor berpengalaman untuk mempercepat perkembangan karier dan skill.</p>
        </div>
        <div className="footer2">
            <h3>Quick Link</h3>
            <Link to="/">Home</Link>
            <Link to="/mentor">Mentor</Link>
            <Link to="/class">Kelas</Link>
            <Link to="/about">Tentang</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/book">Book</Link>
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

export default Home