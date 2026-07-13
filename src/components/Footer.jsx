import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="footer__logo-link" href="#beranda">
              <span className="footer__logo">S</span>
              <span className="footer__name">
                Safar Amanah
                <small>Travel Umroh & Haji</small>
              </span>
            </a>
            <p className="footer__desc">
              Travel umroh dan haji terpercaya dengan pendampingan penuh dari konsultasi hingga kepulangan. Berizin resmi Kementerian Agama RI.
            </p>
          </div>

          <div className="footer__col">
            <h4>Navigasi</h4>
            <a href="#layanan">Layanan</a>
            <a href="#paket">Paket & Jadwal</a>
            <a href="#galeri">Galeri</a>
            <a href="#testimoni">Testimoni</a>
            <a href="#faq">FAQ</a>
            <a href="#kontak">Kontak</a>
          </div>

          <div className="footer__col">
            <h4>Layanan</h4>
            <a href="#paket">Umroh Reguler</a>
            <a href="#paket">Umroh Plus</a>
            <a href="#paket">Umroh VIP</a>
            <a href="#layanan">Konsultasi Haji</a>
            <a href="#layanan">Bantuan Dokumen</a>
          </div>

          <div className="footer__col">
            <h4>Kontak</h4>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              WhatsApp: +62 812-3456-7890
            </a>
            <a href="mailto:info@safaramanah.co.id">
              info@safaramanah.co.id
            </a>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Safar Amanah. Seluruh hak dilindungi.</p>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#fff"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
