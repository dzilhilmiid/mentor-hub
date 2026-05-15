import "../styles/class.css"

function Class () {
    return (
        <>
        <header className="class-header">
        <h1>MentorHub</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/mentor">Mentor</a></li>
                <li><a href="/class">Kelas</a></li>
                <li><a href="/about">Tentang</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/book">Book</a></li>
            </ul>
            <a href="/login">Masuk Sekarang</a>
        </nav>
    </header>

    <section className="class">
    <div className="class-above">
        <h2>Daftar Kelas</h2>
        <p>
            Pilih kelas terbaik untuk meningkatkan skill teknologi,
            desain, bisnis, dan pengembangan karier.
        </p>
    </div>
    <div className="class-list">
        <div className="class-card">
            <div className="class-card-img">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="" />
            </div>
            <div className="class-card-content">
                <div className="class-category">
                    <p>Frontend Development</p>
                </div>
                <div className="class-title">
                    <h3>Belajar React JS Dari Dasar Hingga Mahir</h3>
                </div>
                <div className="class-desc">
                    <p>
                        Pelajari React modern, component, hooks,
                        routing, dan API integration.
                    </p>
                </div>
                <div className="class-footer">
                    <div className="class-footer-left">
                        <p>⭐ 4.9 | 12K mentee</p>
                    </div>
                    <div className="class-footer-right">
                        <p>💰 Rp 200.000 <span>/ Bulan</span></p>
                    </div>
                </div>
                <button>
                    Lihat Kelas
                </button>
            </div>
        </div>
        <div className="class-card">
            <div className="class-card-img">
                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                alt="" />
            </div>
            <div className="class-card-content">
                <div className="class-category">
                    <p>Backend Development</p>
                </div>
                <div className="class-title">
                    <h3>Node JS & Express Untuk Backend Developer</h3>
                </div>
                <div className="class-desc">
                    <p>
                        Belajar membuat REST API, autentikasi,
                        database MongoDB, dan deployment server.
                    </p>
                </div>
                <div className="class-footer">
                    <div className="class-footer-left">
                        <p>⭐ 4.8 | 9K mentee</p>
                    </div>
                    <div className="class-footer-right">
                        <p>💰 Rp 250.000 <span>/ Bulan</span></p>
                    </div>
                </div>
                <button>
                    Lihat Kelas
                </button>
            </div>
        </div>
        <div className="class-card">
            <div className="class-card-img">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="" />
            </div>
            <div className="class-card-content">
                <div className="class-category">
                    <p>FullStack Development</p>
                </div>
                <div className="class-title">
                    <h3>Menjadi Fullstack Web Developer 2026</h3>
                </div>
                <div className="class-desc">
                    <p>
                        Kuasai frontend dan backend mulai dari
                        React, Node JS, database, hingga deployment.
                    </p>
                </div>
                <div className="class-footer">
                    <div className="class-footer-left">
                        <p>⭐ 5.0 | 15K mentee</p>
                    </div>
                    <div className="class-footer-right">
                        <p>💰 Rp 300.000 <span>/ Bulan</span></p>
                    </div>
                </div>
                <button>
                    Lihat Kelas
                </button>
            </div>
        </div>
        <div className="class-card">
            <div className="class-card-img">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="" />
            </div>
            <div className="class-card-content">
                <div className="class-category">
                    <p>Digital Marketing</p>
                </div>
                <div className="class-title">
                    <h3>Strategi Digital Marketing & Social Media</h3>
                </div>
                <div className="class-desc">
                    <p>
                        Pelajari Facebook Ads, Instagram Marketing,
                        content strategy, dan SEO dasar.
                    </p>
                </div>
                <div className="class-footer">
                    <div className="class-footer-left">
                        <p>⭐ 4.7 | 7K mentee</p>
                    </div>
                    <div className="class-footer-right">
                        <p>💰 Rp 150.000 <span>/ Bulan</span></p>
                    </div>
                </div>
                <button>
                    Lihat Kelas
                </button>
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
            <a href="/">Home</a>
            <a href="/mentor">Mentor</a>
            <a href="/class">Kelas</a>
            <a href="/about">Tentang</a>
            <a href="/contact">Contact</a>
            <a href="/book">Book</a>
        </div>
        <div classNameName="footer3">
            <h3>Kontak</h3>
            <p>📧 support@mentorhub.com</p>
            <p>📱 +62 812-0000-0000</p>
            <p>📍 Indonesia</p>
        </div>
    </footer>
        </>
    )
}

export default Class