import { Link } from "react-router-dom"
import"../styles/mentor.css"

function Mentor() {
    return (
        <>

    <section className="mentor">
        <div className="mentor-above">
            <h2>Daftar Mentor</h2>
            <p>Belajar langsung dari mentor profesional dan berpengalaman
            di bidang teknologi, desain, dan bisnis digital.</p>
        </div>
        <div className="mentor-list">
            <div className="mentor-card">
                <div className="mentor-card-img">
                    <img src="https://i.pravatar.cc/304" alt="" />
                </div>
                <div className="mentor-card-name">
                    <h3>Andi rajajaja</h3>
                </div>
                <div className="mentor-card-class">
                    <p>Digital Marketing</p>
                </div>
                <div className="mentor-card-desc">
                    <p>
                       Spesialis digital advertising dan social media branding
                       untuk meningkatkan penjualan bisnis online.
                    </p>
                </div>
                <div className="mentor-card-footer">
                    <p>⭐ 4.8 | 90K+ mentee</p>
                    <button>Lihat profil</button>
                </div>
            </div>
            <div className="mentor-card">
                <div className="mentor-card-img">
                    <img src="https://i.pravatar.cc/302" alt="" />
                </div>
                <div className="mentor-card-name">
                    <h3>Salsa blablabla</h3>
                </div>
                <div className="mentor-card-class">
                    <p>Frontend Developer</p>
                </div>
                <div className="mentor-card-desc">
                    <p>
                        Mentor frontend modern dengan fokus pada React.js,
                        Tailwind CSS, dan responsive website design.
                    </p>
                </div>
                <div className="mentor-card-footer">
                    <p>⭐ 4.9 | 99K + mentee</p>
                    <button>Lihat profil</button>
                </div>
            </div>
            <div className="mentor-card">
                <div className="mentor-card-img">
                    <img src="https://i.pravatar.cc/301" alt="" />
                </div>
                <div className="mentor-card-name">
                    <h3>Amel songopitu</h3>
                </div>
                <div className="mentor-card-class">
                    <p>Backend Developer</p>
                </div>
                <div className="mentor-card-desc">
                    <p>
                        Berpengalaman membangun REST API dan sistem backend
                        menggunakan Node.js, Express, dan MongoDB.
                    </p>
                </div>
                <div className="mentor-card-footer">
                    <p>⭐ 4.7 | 84K+ mentee</p>
                    <button>Lihat profil</button>
                </div>
            </div>
            <div className="mentor-card">
                <div className="mentor-card-img">
                    <img src="https://i.pravatar.cc/300" alt="" />
                </div>
                <div className="mentor-card-name">
                    <h3>Bambang wolulas</h3>
                </div>
                <div className="mentor-card-class">
                    <p>Fullstack Developer</p>
                </div>
                <div className="mentor-card-desc">
                    <p>
                        Fullstack engineer yang membantu mentee membangun
            aplikasi web dari frontend hingga backend.
                    </p>
                </div>
                <div className="mentor-card-footer">
                    <p>⭐ 5.0 | 201K+ mentee</p>
                    <button>Lihat profil</button>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

export default Mentor