import { useReveal } from '../hooks/useReveal.js'
import './CTAFinal.css'

const WA_LINK = 'https://wa.me/6281234567890?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20umroh%2Fhaji.'

export default function CTAFinal() {
  const [ref, visible] = useReveal()

  return (
    <section className="cta-banner" ref={ref}>
      <div className={`container cta-banner__inner reveal ${visible ? 'visible' : ''}`}>
        <div className="cta-banner__content">
          <h2 className="cta-banner__heading">
            Siap Memulai Perjalanan Suci Anda?
          </h2>
          <p className="cta-banner__desc">
            Konsultasi gratis, tanpa komitmen. Admin kami siap membantu merencanakan ibadah Anda.
          </p>
        </div>
        <a className="btn btn--wa btn--lg cta-banner__btn" href={WA_LINK} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7s.6-1.9.9-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2.1.4 0 .6l-.4.6-.3.4c-.1.1-.2.3-.1.5.1.2.6 1 1.3 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.1Z"/></svg>
          Hubungi Kami Sekarang
        </a>
      </div>
    </section>
  )
}
