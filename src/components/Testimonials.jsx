import { useState, useRef, useEffect, useCallback } from 'react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    text: '"Alhamdulillah, dari awal daftar sampai pulang semuanya dibimbing. Orang tua saya sangat diperhatikan selama di Tanah Suci."',
    name: 'Ibu Halimah',
    detail: 'Jamaah Umroh · Jakarta',
  },
  {
    text: '"Adminnya sabar banget jawab pertanyaan saya berkali-kali. Prosesnya jelas dan tidak ada biaya tersembunyi."',
    name: 'Bpk. Ahmad',
    detail: 'Jamaah Umroh · Bandung',
  },
  {
    text: '"Manasiknya lengkap, jadi pas di sana sudah paham. Insya Allah tahun depan berangkat lagi bareng keluarga."',
    name: 'Ibu Siti',
    detail: 'Jamaah Umroh · Surabaya',
  },
  {
    text: '"Hotel bintang 5 view Haram langsung! Pengalaman VIP yang benar-benar tak terlupakan. Jazakallahu khairan."',
    name: 'Bpk. Ridwan',
    detail: 'Jamaah VIP · Medan',
  },
  {
    text: '"Umroh plus ke Turki, semua diurus A-Z. Perjalanan lancar, ibadah khusyuk. Highly recommended!"',
    name: 'Ibu Nurma',
    detail: 'Jamaah Plus · Makassar',
  },
  {
    text: '"First-timer tapi sangat terbantu bimbingannya. Pembimbing sabar dan berpengetahuan luas."',
    name: 'Bpk. Fajar',
    detail: 'Jamaah Umroh · Yogyakarta',
  },
]

export default function Testimonials() {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const autoPlayRef = useRef(null)

  const updateButtons = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 10)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  const scrollBy = useCallback((dir) => {
    const el = trackRef.current
    if (!el) return
    const cardWidth = el.querySelector('.review-card')?.offsetWidth || 340
    el.scrollBy({ left: dir * (cardWidth + 20), behavior: 'smooth' })
  }, [])

  // Auto-scroll
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const el = trackRef.current
        if (!el) return
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scrollBy(1)
        }
      }, 4000)
    }

    startAutoPlay()

    const el = trackRef.current
    const pauseAutoPlay = () => clearInterval(autoPlayRef.current)
    const resumeAutoPlay = () => { clearInterval(autoPlayRef.current); startAutoPlay() }

    el?.addEventListener('mouseenter', pauseAutoPlay)
    el?.addEventListener('mouseleave', resumeAutoPlay)
    el?.addEventListener('touchstart', pauseAutoPlay, { passive: true })
    el?.addEventListener('touchend', resumeAutoPlay)

    return () => {
      clearInterval(autoPlayRef.current)
      el?.removeEventListener('mouseenter', pauseAutoPlay)
      el?.removeEventListener('mouseleave', resumeAutoPlay)
      el?.removeEventListener('touchstart', pauseAutoPlay)
      el?.removeEventListener('touchend', resumeAutoPlay)
    }
  }, [scrollBy])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateButtons, { passive: true })
    updateButtons()
    return () => el.removeEventListener('scroll', updateButtons)
  }, [updateButtons])

  return (
    <section className="reviews section" id="testimoni">
      <div className="container">
        <div className="reviews__header">
          <div>
            <h2 className="reviews__heading">Apa Kata Jamaah?</h2>
            <p className="reviews__sub">Pengalaman nyata dari mereka yang sudah berangkat bersama kami.</p>
          </div>
          <div className="reviews__nav">
            <button
              className="reviews__btn"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Sebelumnya"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button
              className="reviews__btn"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Selanjutnya"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="reviews__track" ref={trackRef}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="review-card">
              <div className="review-card__stars">★★★★★</div>
              <p className="review-card__text">{t.text}</p>
              <div className="review-card__author">
                <div className="review-card__avatar">{t.name.charAt(t.name.indexOf(' ') + 1)}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
