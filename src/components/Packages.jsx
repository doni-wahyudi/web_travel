import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import './Packages.css'

const WA_BASE = 'https://wa.me/6281234567890?text='

const PACKAGES = [
  {
    name: 'Reguler',
    duration: '9 Hari',
    price: '25',
    unit: 'juta',
    highlight: false,
    features: ['Tiket pesawat PP', 'Visa umroh resmi', 'Hotel bintang 3-4', 'Transportasi AC', 'Makan 3x sehari', 'Pembimbing ibadah', 'City tour'],
    wa: 'Assalamu%27alaikum%2C%20saya%20tertarik%20Paket%20Umroh%20Reguler.',
  },
  {
    name: 'Plus',
    duration: '12 Hari',
    price: '35',
    unit: 'juta',
    highlight: true,
    label: 'Populer',
    features: ['Semua fasilitas Reguler', 'Wisata halal (Turki/Dubai)', 'Hotel bintang 4-5', 'Tour leader berpengalaman', 'Makan prasmanan', 'Handling airport'],
    wa: 'Assalamu%27alaikum%2C%20saya%20tertarik%20Paket%20Umroh%20Plus.',
  },
  {
    name: 'VIP',
    duration: '9 Hari',
    price: '50',
    unit: 'juta',
    highlight: false,
    features: ['Hotel bintang 5 view Haram', 'Pesawat full-service', 'Pendamping pribadi', 'Fast track imigrasi', 'Laundry & porter', 'Perlengkapan premium'],
    wa: 'Assalamu%27alaikum%2C%20saya%20tertarik%20Paket%20Umroh%20VIP.',
  },
]

function PkgCard({ pkg, index }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`pricing-card reveal ${visible ? 'visible' : ''} ${pkg.highlight ? 'pricing-card--pop' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {pkg.label && <span className="pricing-card__label">{pkg.label}</span>}
      <div className="pricing-card__top">
        <h3 className="pricing-card__name">{pkg.name}</h3>
        <span className="pricing-card__dur">{pkg.duration}</span>
      </div>
      <div className="pricing-card__price">
        <span className="pricing-card__currency">Rp</span>
        <span className="pricing-card__amount">{pkg.price}</span>
        <span className="pricing-card__unit">/{pkg.unit}*</span>
      </div>
      <ul className="pricing-card__list">
        {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <a
        className={`pricing-card__btn ${pkg.highlight ? 'pricing-card__btn--fill' : ''}`}
        href={`${WA_BASE}${pkg.wa}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Pilih Paket Ini
      </a>
    </div>
  )
}

export default function Packages() {
  return (
    <section className="pricing section" id="paket">
      <div className="container">
        <h2 className="pricing__heading">Pilihan Paket</h2>
        <p className="pricing__sub">Semua paket termasuk visa, tiket, hotel, dan pembimbing ibadah.</p>

        <div className="pricing__grid">
          {PACKAGES.map((pkg, i) => (
            <PkgCard key={i} pkg={pkg} index={i} />
          ))}
        </div>

        <p className="pricing__note">* Harga estimasi, dapat berubah. Hubungi admin untuk harga terbaru.</p>
      </div>
    </section>
  )
}
