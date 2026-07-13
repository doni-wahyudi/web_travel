import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import './Gallery.css'

import imgMakkah from '../assets/gallery-makkah.png'
import imgMadinah from '../assets/gallery-madinah.png'
import imgIhram from '../assets/gallery-ihram.png'
import imgHotel from '../assets/gallery-hotel.png'
import imgGroup from '../assets/gallery-group.png'
import imgPrayer from '../assets/gallery-prayer.png'

const IMAGES = [
  { src: imgMakkah, alt: 'Masjidil Haram dari udara', caption: 'Masjidil Haram' },
  { src: imgMadinah, alt: 'Masjid Nabawi', caption: 'Masjid Nabawi' },
  { src: imgIhram, alt: 'Jamaah dalam perjalanan', caption: 'Perjalanan' },
  { src: imgHotel, alt: 'Hotel premium', caption: 'Akomodasi' },
  { src: imgGroup, alt: 'Foto bersama jamaah', caption: 'Kebersamaan' },
  { src: imgPrayer, alt: 'Suasana ibadah', caption: 'Ibadah' },
]

function GalleryItem({ img, index, onClick }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`gal-item reveal ${visible ? 'visible' : ''} ${index === 0 ? 'gal-item--large' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
      onClick={onClick}
    >
      <img src={img.src} alt={img.alt} loading="lazy" />
      <span className="gal-item__label">{img.caption}</span>
    </div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="gal section" id="galeri">
      <div className="container">
        <h2 className="gal__heading">Dokumentasi Perjalanan</h2>

        <div className="gal__grid">
          {IMAGES.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} onClick={() => setLightbox(i)} />
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>&times;</button>
          <button className="lightbox__nav lightbox__prev" onClick={(e) => { e.stopPropagation(); setLightbox(p => p === 0 ? IMAGES.length - 1 : p - 1) }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={IMAGES[lightbox].src} alt={IMAGES[lightbox].alt} />
          </div>
          <button className="lightbox__nav lightbox__next" onClick={(e) => { e.stopPropagation(); setLightbox(p => p === IMAGES.length - 1 ? 0 : p + 1) }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      )}
    </section>
  )
}
