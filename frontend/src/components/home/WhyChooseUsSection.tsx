import { stats } from '../../data/content'
import womencleaning from '../../assets/womencleaning.png'
import menscleaning from '../../assets/menscleaning.png'
import circleImage from '../../assets/circle.png'
import { Leaf, ShieldCheck, Star } from 'lucide-react'

export function WhyChooseUsSection() {
  return (
    <section className="container section choose-section">
      <div className="choose-card">
        <h2>Why Choose Us?</h2>
        <p className="choose-subtitle">
          Our trained cleaners treat your home like their own, delivering reliable,
          high-quality service you can count on every time.
        </p>

        <div className="choose-row">
          <img src={womencleaning} alt="Woman cleaner" className="choose-image left" />
          <div className="choose-copy">
            <h3><Leaf size={17} /> Eco-Friendly Cleaning</h3>
            <p>
              We use safe, sustainable products that are gentle on your home and the
              planet, leaving every space fresh, clean, and chemical-free.
            </p>
          </div>
        </div>

        <div className="choose-row reverse">
          <div className="choose-copy">
            <h3><ShieldCheck size={17} /> Trusted Professionals</h3>
            <p>
              Our trained cleaners treat your home like their own, delivering reliable,
              high-quality service you can count on every time.
            </p>
          </div>
          <img src={menscleaning} alt="Men cleaning floors" className="choose-image right" />
        </div>
      </div>

      <div className="stats-strip">
        <div className="stats-note">We speak with our powerful statistics</div>
        {stats.map((item) => (
          <div key={item.label} className="stats-item">
            <h3>{item.value}</h3>
            <p><Star size={13} /> {item.label}</p>
          </div>
        ))}
        <img src={circleImage} alt="Cleaner" className="stats-badge-image" />
      </div>
    </section>
  )
}
