import { Link } from "react-router-dom"
import { useState } from "react"
import"../styles/book.css"

function Book() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [mentor, setMentor] = useState("")
    const [mentorName, setMentorName] = useState("")
    const [date, setDate] = useState("")
    const [duration, setDuration] = useState("")

    const platformFee = 10000 

    const mentorPrice = Number(mentor) || 0
    const durationValue = Number(duration) || 0

    const mentorTotal = mentorPrice * durationValue
    const platformTotal = platformFee * durationValue
    const total = mentorTotal + platformTotal

    function formatRupiah(number) {
        return "Rp" + number.toLocaleString("id-ID")
    }

    function handleMentorChange(e) {
        setMentor(e.target.value)
        setMentorName(
            e.target.options[e.target.selectedIndex].text
        )
    }
    return(
        <>

    <section className="booking">
        <div className="booking-title">
            <h2>Pesan Mentor</h2>
            <p>
                Isi form berikut untuk melakukan booking sesi mentoring
                bersama mentor pilihanmu.
            </p>
        </div>
        <div className="booking-container">
            <form className="booking-form">
                <div className="input-group">
                    <label>Nama Lengkap</label>
                    <input type="text" placeholder="Masukkan nama lengkap" onChange={(e) => setFullname(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Masukkan email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Pilih Mentor</label>
                    <select onChange={handleMentorChange}>
                        <option>-- Pilih Mentor --</option>
                        <option value="290000">FullStack Development - Rp 300.000</option>
                        <option value="190000">Frontend Development - Rp 200.000</option>
                        <option value="240000">Backend Development - Rp 250.000</option>
                        <option value="140000">Digital Marketing - Rp 150.000</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>Tanggal Mentoring</label>
                    <input type="date" onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Durasi Mentoring (Bulan)</label>
                    <input type="number" onChange={(e) => setDuration(e.target.value)} />
                </div>

                <div className="payment-section">

                    <h3>Metode Pembayaran</h3>

                    <div className="payment-methods">

                        <label className="payment-card">
                            <input type="radio" name="payment" />
                            <span>💳 Transfer Bank</span>
                        </label>

                        <label className="payment-card">
                            <input type="radio" name="payment" />
                            <span>📱 E-Wallet</span>
                        </label>

                        <label className="payment-card">
                            <input type="radio" name="payment" />
                            <span>🏦 Virtual Account</span>
                        </label>
                    </div>
                </div>
                <div className="input-group">
                    <label>Upload Bukti Pembayaran</label>
                    <input type="file" />
                </div>
                <button type="submit">
                    Booking Sekarang
                </button>
            </form>
            <div className="transaction-box">
                <h3>Ringkasan Transaksi</h3>
                <div className="transaction-item">
                    <p>Nama Lengkap</p>
                    <span>{fullname || "-"}</span>
                </div>
                <div className="transaction-item">
                    <p>Email</p>
                    <span>{email || "-"}</span>
                </div>
                <div className="transaction-item">
                    <p>Tanggal Mentoring</p>
                    <span>{date || "-"}</span>
                </div>
                <div className="transaction-item">
                    <p>Mentor</p>
                    <span>{mentorName || "-"}</span>
                </div>
                <div className="transaction-item">
                    <p>Durasi</p>
                    <span>{duration ? `${duration} Bulan` : "-"}</span>
                </div>
                <div className="transaction-item">
                    <p>Harga Mentor</p>
                    <span>{mentorTotal 
                                ? formatRupiah(mentorTotal) 
                                : "-"}
                    </span>
                </div>
                <div className="transaction-item">
                    <p>Biaya Platform</p>
                    <span>
                        {durationValue
                            ? `${formatRupiah(platformFee)} x ${durationValue}`
                            : "-"}
                    </span>
                </div>
                <div className="transaction-item total">
                    <p>Total Pembayaran</p>
                    <span >
                        {mentorTotal
                            ? formatRupiah(total)
                            : "-"}
                    </span>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

export default Book