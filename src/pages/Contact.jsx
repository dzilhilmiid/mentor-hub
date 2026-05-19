import { Link } from "react-router-dom"
import"../styles/contact.css"

function Contact() {
    return(
        <>
        

    <section className="contact">
        <div className="contact-title">
            <h2>Hubungi Kami</h2>
            <p>
                Jika kamu memiliki pertanyaan, kritik, atau saran,
                silakan hubungi tim MentorHub melalui form berikut.
            </p>
        </div>

        <div className="contact-container">

            <div className="contact-info">
                <h3>Informasi Kontak</h3>

                <div className="info-box">
                    <span>📧</span>
                    <p>support@mentorhub.com</p>
                </div>

                <div className="info-box">
                    <span>📱</span>
                    <p>+62 812-0000-0000</p>
                </div>

                <div className="info-box">
                    <span>📍</span>
                    <p>Indonesia</p>
                </div>
            </div>

            <form className="contact-form">

                <div className="input-group">
                    <label>Nama Lengkap</label>
                    <input type="text" placeholder="Masukkan nama" />
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Masukkan email" />
                </div>

                <div className="input-group">
                    <label>Pesan</label>
                    <textarea rows="6" placeholder="Tulis pesanmu..."></textarea>
                </div>

                <button type="submit">
                    Kirim Pesan
                </button>

            </form>

        </div>
    </section>

        </>
    )
}

export default Contact