import { useEffect, useState } from 'react'
import heroBg from '../assets/hero-bg.png'
import './Hero.css'

const WA_LINK = 'https://wa.me/6281234567890?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20umroh%2Fhaji.'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="hero" id="beranda">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero__overlay" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="hero__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      <div className="container hero__content">
        <span className={`hero__badge ${loaded ? 'animate' : ''}`}>
          ✦ Terpercaya & Berizin Resmi
        </span>

        <h1 className={`hero__title ${loaded ? 'animate' : ''}`}>
          <span className="hero__title-sub">Perjalanan Suci Bersama</span>
          Safar Amanah
        </h1>

        <p className={`hero__script ${loaded ? 'animate' : ''}`}>
          Wujudkan impian ibadah ke Tanah Suci
        </p>

        <div className={`hero__rating ${loaded ? 'animate' : ''}`}>
          <span className="hero__stars" aria-hidden="true">★★★★★</span>
          <span><b>5.0</b> dari <b>500+</b> jamaah puas</span>
        </div>

        <div className={`hero__ctas ${loaded ? 'animate' : ''}`}>
          <a className="btn btn--wa btn--lg" href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7s.6-1.9.9-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2.1.4 0 .6l-.4.6-.3.4c-.1.1-.2.3-.1.5.1.2.6 1 1.3 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.1Z"/></svg>
            Konsultasi Gratis
          </a>
          <a className="btn btn--ghost" href="#paket">
            Lihat Paket Umroh
          </a>
        </div>

        <div className={`hero__meta ${loaded ? 'animate' : ''}`}>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
            Konsultasi gratis
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z"/></svg>
            Pendampingan penuh
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            Berizin PPIU Kemenag
          </span>
        </div>
      </div>

      {/* Simple gradient wave transition — no copied skyline */}
      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="var(--cream)" />
          <path d="M0,80 C360,30 720,110 1080,50 C1260,25 1380,60 1440,80 L1440,120 L0,120 Z" fill="var(--cream)" opacity="0.6" />
        </svg>
      </div>
    </header>
  )
}
