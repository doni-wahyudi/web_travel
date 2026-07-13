import { useState } from 'react'
import './FAQ.css'

const FAQ_DATA = [
  { q: 'Apa saja paket umroh yang tersedia?', a: 'Kami menyediakan tiga pilihan: Reguler (9 hari), Plus (dengan wisata halal ke Turki/Dubai), dan VIP (hotel bintang 5 view Haram). Hubungi admin untuk detail terbaru.' },
  { q: 'Bisa konsultasi dulu sebelum daftar?', a: 'Tentu! Konsultasi gratis tanpa komitmen. Admin kami siap membantu menjelaskan paket, jadwal, dan persiapan yang sesuai.' },
  { q: 'Dokumen apa saja yang diperlukan?', a: 'Paspor aktif (min. 7 bulan), pas foto 4x6, KTP, KK, buku nikah (pasutri), dan sertifikat vaksin meningitis. Tim kami mendampingi seluruh prosesnya.' },
  { q: 'Ada jadwal keberangkatan terdekat?', a: 'Jadwal diperbarui setiap bulan. Silakan hubungi admin via WhatsApp untuk jadwal dan sisa kursi terbaru.' },
  { q: 'Bisa daftarkan orang tua/keluarga?', a: 'Bisa. Jamaah lansia mendapat pendampingan khusus termasuk kursi roda dan layanan prioritas.' },
  { q: 'Biaya bisa dicicil?', a: 'Tersedia opsi pembayaran bertahap untuk beberapa paket. Detail skema diinformasikan transparan di awal.' },
  { q: 'Bagaimana legalitas & keamanan?', a: 'Terdaftar resmi sebagai PPIU di Kementerian Agama RI. Bermitra dengan maskapai dan hotel terpercaya.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <div className="faq-section__layout">
          <div className="faq-section__left">
            <h2 className="faq-section__heading">Pertanyaan<br />Umum</h2>
            <p className="faq-section__desc">Belum menemukan jawaban? Chat langsung dengan admin kami.</p>
            <a className="faq-section__link" href="https://wa.me/6281234567890?text=Assalamu%27alaikum%2C%20saya%20punya%20pertanyaan." target="_blank" rel="noopener noreferrer">
              Tanya via WhatsApp →
            </a>
          </div>
          <div className="faq-section__right">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
                <button className="faq-item__q" onClick={() => setOpenIndex(prev => prev === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-item__toggle">{openIndex === i ? '−' : '+'}</span>
                </button>
                <div className="faq-item__a" style={{ maxHeight: openIndex === i ? '200px' : 0 }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
