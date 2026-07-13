import { useReveal } from '../hooks/useReveal.js'
import './Location.css'

const WA_LINK = 'https://wa.me/6281234567890?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi.'

export default function Location() {
  const [ref, visible] = useReveal()

  return (
    <section className="contact section" id="kontak">
      <div className="container">
        <h2 className="contact__heading">Hubungi Kami</h2>

        <div ref={ref} className={`contact__grid reveal ${visible ? 'visible' : ''}`}>
          <div className="contact__info">
            <div className="contact__item">
              <span className="contact__icon">📍</span>
              <div>
                <strong>Kantor</strong>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon">📱</span>
              <div>
                <strong>WhatsApp</strong>
                <p>+62 812-3456-7890</p>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>info@safaramanah.co.id</p>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon">🕐</span>
              <div>
                <strong>Jam Kerja</strong>
                <p>Senin – Sabtu, 08.00 – 17.00 WIB</p>
              </div>
            </div>
            <a className="btn btn--wa contact__btn" href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7s.6-1.9.9-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2.1.4 0 .6l-.4.6-.3.4c-.1.1-.2.3-.1.5.1.2.6 1 1.3 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.1Z"/></svg>
              Chat Admin
            </a>
          </div>
          <div className="contact__map">
            <iframe
              title="Lokasi Safar Amanah"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295788!2d106.68943!3d-6.229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
