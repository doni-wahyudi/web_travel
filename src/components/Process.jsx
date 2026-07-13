import { useReveal } from '../hooks/useReveal.js'
import './Process.css'

const STEPS = [
  { num: '01', title: 'Chat Admin', desc: 'Hubungi kami via WhatsApp, ceritakan rencana Anda.' },
  { num: '02', title: 'Pilih Paket', desc: 'Kami bantu pilihkan paket sesuai kebutuhan dan budget.' },
  { num: '03', title: 'Siapkan Dokumen', desc: 'Tim kami dampingi pengurusan paspor, visa, dan vaksin.' },
  { num: '04', title: 'Bayar & Manasik', desc: 'Pembayaran transparan, lalu ikuti pembekalan ibadah.' },
  { num: '05', title: 'Berangkat!', desc: 'Berangkat bersama rombongan dan pembimbing.' },
]

export default function Process() {
  const [ref, visible] = useReveal()

  return (
    <section className="process section" id="alur">
      <div className="container">
        <h2 className="process__heading">Bagaimana Caranya?</h2>
        <p className="process__sub">Lima langkah mudah menuju Tanah Suci.</p>

        <div ref={ref} className={`process__track reveal ${visible ? 'visible' : ''}`}>
          {STEPS.map((step, i) => (
            <div key={i} className="process__step" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="process__num">{step.num}</span>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
