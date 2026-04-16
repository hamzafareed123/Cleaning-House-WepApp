import { Link } from 'react-router-dom'

import './ServicesPreviewSection.css'

type Service = {
  title: string
  image: string
}

type ServicesPreviewSectionProps = {
  services: Service[]
}

const viewServices = ()=>{
  
  scrollTo(0,0)
}

export function ServicesPreviewSection({ services }: ServicesPreviewSectionProps) {
  return (
    <section className="container section services-preview">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">Here&apos;s What we can Do for you...</p>
      <div className="service-grid">
        {services.map((item) => (
          <article key={item.title} className="service-card">
            <img src={item.image} alt={item.title} />
            <div className="service-card-body">
              <h3>{item.title}</h3>
              <button type="button">
                <span aria-hidden="true">+</span>
                Learn More
              </button>
            </div>
          </article>
        ))}
      </div>
      <Link className="services-view-all" to="/services" onClick={viewServices}>
        View Our Services
      </Link>
    </section>
  )
}
