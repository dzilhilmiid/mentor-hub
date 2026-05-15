import { Link } from "react-router-dom"
import"../styles/about.css"

function About() {
    return(
        <>
        <header className="about-header">
        <h1>MentorHub</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/mentor">Mentor</Link></li>
                <li><Link to="/class">Kelas</Link></li>
                <li><Link to="/about">Tentang</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/book">Book</Link></li>
            </ul>
            <Link to="/login">Masuk Sekarang</Link>
        </nav>
    </header>

    <section className="about">
        <div className="about-above">
            <h2>Tentang MentorHub</h2>
            <p>
                MentorHub adalah platform pembelajaran yang menghubungkan
                mentee dengan mentor profesional untuk membantu meningkatkan
                skill, karier, dan pengalaman belajar yang lebih terarah.
            </p>
        </div>
        <div className="about-vision">
            <div className="vision-card">
                <h2>🎯 Visi</h2>
                <p>
                    Menjadi platform mentoring terbaik di Indonesia
                    untuk mendukung perkembangan skill generasi muda.
                </p>
            </div>

            <div className="vision-card">
                <h2>🚀 Misi</h2>
                <p>
                    Memberikan akses belajar yang fleksibel,
                    mentor berkualitas, dan pengalaman belajar yang efektif.
                </p>
            </div>
        </div>

        <div className="about-feature">
            <h2>Kenapa Memilih MentorHub?</h2>
            <div className="about-feature-list">
                <div className="about-feature-card">
                    <div className="icon">👨‍🏫</div>
                    <h3>Mentor Profesional</h3>
                    <p>
                        Mentor berasal dari industri dan memiliki pengalaman nyata.
                    </p>
                </div>
                <div className="about-feature-card">
                    <div className="icon">📚</div>
                    <h3>Materi Berkualitas</h3>
                    <p>
                        Materi disusun sesuai kebutuhan industri modern.
                    </p>
                </div>
                <div className="about-feature-card">
                    <div className="icon">⏰</div>
                    <h3>Belajar Fleksibel</h3>
                    <p>
                        Belajar kapan saja dan di mana saja sesuai jadwalmu.
                    </p>
                </div>
            </div>
        </div>
        <div className="about-team">
            <h2>Tim Kami</h2>
            <div className="about-team-list">
                <div className="about-team-card">
                    <img src="https://i.pravatar.cc/150?img=1" alt="team" />
                    <h3>Ahmad Fauzi</h3>
                    <p>Founder & CEO</p>
                </div>
                <div className="about-team-card">
                    <img src="https://i.pravatar.cc/150?img=2" alt="team" />
                    <h3>Siti Aulia</h3>
                    <p>UI/UX Designer</p>
                </div>
                <div className="about-team-card">
                    <img src="https://i.pravatar.cc/150?img=3" alt="team" />
                    <h3>Rizky Pratama</h3>
                    <p>Lead Mentor</p>
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

export default About