import { useReveal } from '../hooks/useReveal.js'
import './Services.css'

const WA_BASE = 'https://wa.me/6281234567890?text='

const SERVICES = [
  {
    icon: '🕋',
    title: 'Umroh Reguler',
    desc: 'Paket umroh standar dengan pembimbing, akomodasi dekat Masjidil Haram & Nabawi.',
    wa: 'Assalamu%27alaikum%2C%20saya%20mau%20tanya%20Paket%20Umroh%20Reguler.',
  },
  {
    icon: '✈️',
    title: 'Umroh Plus',
    desc: 'Umroh plus wisata halal ke Turki, Dubai, atau Aqsa dalam satu perjalanan.',
    wa: 'Assalamu%27alaikum%2C%20saya%20mau%20tanya%20Paket%20Umroh%20Plus.',
  },
  {
    icon: '👑',
    title: 'Umroh VIP',
    desc: 'Fasilitas premium — hotel bintang 5 view Haram, pesawat langsung, pendamping eksklusif.',
    wa: 'Assalamu%27alaikum%2C%20saya%20mau%20tanya%20Paket%20Umroh%20VIP.',
  },
  {
    icon: '📋',
    title: 'Konsultasi Haji',
    desc: 'Informasi jalur haji, masa tunggu, dan persiapan yang perlu Anda mulai dari sekarang.',
    wa: 'Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20tentang%20haji.',
  },
  {
    icon: '📄',
    title: 'Bantuan Dokumen',
    desc: 'Pendampingan pengurusan paspor, visa, vaksin, dan kelengkapan lainnya.',
    wa: 'Assalamu%27alaikum%2C%20saya%20mau%20tanya%20soal%20bantuan%20dokumen.',
  },
  {
    icon: '📖',
    title: 'Manasik & Persiapan',
    desc: 'Pembekalan tata cara umroh/haji dan persiapan spiritual sebelum keberangkatan.',
    wa: 'Assalamu%27alaikum%2C%20saya%20mau%20tanya%20soal%20manasik.',
  },
]

function ServiceCard({ icon, title, desc, wa, index }) {
  const [ref, visible] = useReveal()
  return (
    <a
      ref={ref}
      href={`${WA_BASE}${wa}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`svc-card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <span className="svc-card__emoji">{icon}</span>
      <h3 className="svc-card__title">{title}</h3>
      <p className="svc-card__desc">{desc}</p>
      <span className="svc-card__action">Konsultasi →</span>
    </a>
  )
}

export default function Services() {
  return (
    <section className="services section" id="layanan">
      <div className="container">
        <div className="services__header">
          <h2 className="services__heading">
            Apa yang Bisa<br />Kami Bantu?
          </h2>
          <p className="services__intro">
            Pilih layanan yang Anda butuhkan. Semua konsultasi gratis — langsung chat admin kami.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={i} {...svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
