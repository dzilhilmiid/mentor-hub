import { Link } from "react-router-dom"
import "../styles/class.css"

function Class () {
    return (
        <>

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
                <img src={`${import.meta.env.BASE_URL}frontend.jfif`}
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
                <img src={`${import.meta.env.BASE_URL}backend.avif`}
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
                <img src={`${import.meta.env.BASE_URL}fullstack.png `}
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
                <img src={`${import.meta.env.BASE_URL}digital.jfif`}
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

        </>
    )
}

export default Class