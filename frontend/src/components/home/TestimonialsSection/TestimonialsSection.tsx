import client1 from '../../../assets/client1.png'
import client2 from '../../../assets/client2.jpg'
import client3 from '../../../assets/client3.avif'
import leaf from '../../../assets/leaf.png'
import { Star } from 'lucide-react'
import './TestimonialsSection.css'

const testimonials = [
  {
    id: 1,
    name: 'Anya Mason',
    role: 'Event Planner',
    text: 'The cleaning team is fantastic! They did a deep clean before my big event and the place looked absolutely spotless. Highly recommend their professional and detail-oriented approach.',
    image: client1,
  },
  {
    id: 2,
    name: 'Asa Salazar',
    role: 'Real Estate Agent',
    text: 'I rely on this service for all my move-out and regular cleanings. They are consistently punctual, thorough, and my clients are always impressed by the pristine results.',
    image: client2,
  },
  {
    id: 3,
    name: 'Sage Gates',
    role: 'Working Parent',
    text: 'With two kids and a full-time job, keeping the house clean was a nightmare. Since hiring them, my home is always fresh, smells amazing, and I finally have my weekends back!',
    image: client3,
  },

]

export function TestimonialsSection() {
  return (
    <section className="container section testimonials-section">
      <div className="testimonials-card">
        <h2 className="testimonials-title">
          What Our Happy Clients Says
          <img src={leaf} alt="leaf icon" className="title-leaf" />
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((client) => (
            <div key={client.id} className="testimonial-item">
              <div className="testimonial-avatar">
                <div className="avatar-img-wrap">
                  <img src={client.image} alt={client.name} />
                </div>
                <div className="avatar-stars">
                  <Star fill="#fcd34d" stroke="#fcd34d" size={14} />
                  <Star fill="#fcd34d" stroke="#fcd34d" size={14} />
                  <Star fill="#fcd34d" stroke="#fcd34d" size={14} />
                  <Star fill="#fcd34d" stroke="#fcd34d" size={14} />
                  <Star fill="#fcd34d" stroke="#fcd34d" size={14} />
                </div>
              </div>
              <div className="testimonial-bubble">
                <div className="bubble-arrow"></div>
                <h4>{client.name}</h4>
                <span className="testimonial-role">{client.role}</span>
                <p>{client.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
