import { CalendarCheck2, Leaf, Search, Sparkles } from 'lucide-react'
import basketImage from '../../../assets/basket.png'
import './HowItWorksSection.css'

const steps = [
  {
    title: 'Find Us Fast Now',
    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem.',
    icon: Search,
    number: 1,
  },
  {
    title: 'Choose Services',
    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem.',
    icon: Sparkles,
    number: 2,
  },
  {
    title: 'Book Appointment',
    description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem.',
    icon: CalendarCheck2,
    number: 3,
  },
]

export function HowItWorksSection() {
  return (
    <section className="container section works-section">
      <h2 className="works-title">How 'FreshSpaces' Works</h2>
      <div className="works-steps">
        {steps.map((step) => (
          <article key={step.title} className="works-step">
            <div className="works-icon-wrap">
              <step.icon size={18} strokeWidth={2} />
              <span>{step.number}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <div className="who-we-are-shell">
        <article className="who-we-are-card">
          <div>
            <p className="who-tag">who we are <Leaf size={14} strokeWidth={2.4} /></p>
            <h3>We&apos;re Your Trusted Partner for a Fresh, Sparkling Space</h3>
            <p>
              At FreshSpaces, our mission is to make cleaning effortless and enjoyable
              by connecting you with reliable, professional cleaners who care about your
              home as much as you do.
            </p>
            <button>Learn More</button>
          </div>
          <img src={basketImage} alt="Cleaning tools basket and flowers" />
        </article>
      </div>
    </section>
  )
}
