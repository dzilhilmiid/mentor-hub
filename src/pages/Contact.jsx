import { Link } from "react-router-dom"
import"../styles/contact.css"

function Contact() {
    return(
        <>
        <header class="contact-header">
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

    <section class="contact">
        <div class="contact-title">
            <h2>Hubungi Kami</h2>
            <p>
                Jika kamu memiliki pertanyaan, kritik, atau saran,
                silakan hubungi tim MentorHub melalui form berikut.
            </p>
        </div>

        <div class="contact-container">

            <div class="contact-info">
                <h3>Informasi Kontak</h3>

                <div class="info-box">
                    <span>📧</span>
                    <p>support@mentorhub.com</p>
                </div>

                <div class="info-box">
                    <span>📱</span>
                    <p>+62 812-0000-0000</p>
                </div>

                <div class="info-box">
                    <span>📍</span>
                    <p>Indonesia</p>
                </div>
            </div>

            <form class="contact-form">

                <div class="input-group">
                    <label>Nama Lengkap</label>
                    <input type="text" placeholder="Masukkan nama" />
                </div>

                <div class="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Masukkan email" />
                </div>

                <div class="input-group">
                    <label>Pesan</label>
                    <textarea rows="6" placeholder="Tulis pesanmu..."></textarea>
                </div>

                <button type="submit">
                    Kirim Pesan
                </button>

            </form>

        </div>
    </section>

    <footer class="footer">
        <div class="footer1">
            <h2>MentorHub</h2>
            <p>
                Platform yang menghubungkan mentee dengan mentor 
                berpengalaman untuk mempercepat perkembangan 
                karier dan skill.
            </p>
        </div>

        <div class="footer2">
            <h3>Quick Link</h3>
            <a href="/">Home</a>
            <a href="/mentor">Mentor</a>
            <a href="/class">Kelas</a>
            <a href="/about">Tentang</a>
            <a href="/contact">Contact</a>
            <a href="/book">Book</a>
        </div>

        <div class="footer3">
            <h3>Kontak</h3>
            <p>📧 support@mentorhub.com</p>
            <p>📱 +62 812-0000-0000</p>
            <p>📍 Indonesia</p>
        </div>
    </footer>
        </>
    )
}

export default Contact