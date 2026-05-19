import { Link } from "react-router-dom"
import"../styles/about.css"

function About() {
    return(
        <>

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
                    <img src="https://i.pravatar.cc/152" alt="team" />
                    <h3>Ahmad Fauzi</h3>
                    <p>Founder & CEO</p>
                </div>
                <div className="about-team-card">
                    <img src="https://i.pravatar.cc/150" alt="team" />
                    <h3>Siti Aulia</h3>
                    <p>UI/UX Designer</p>
                </div>
                <div className="about-team-card">
                    <img src="https://i.pravatar.cc/159" alt="team" />
                    <h3>Rizky Pratama</h3>
                    <p>Lead Mentor</p>
                </div>
            </div>
        </div>
    </section>

    
        </>
    )
}

export default About