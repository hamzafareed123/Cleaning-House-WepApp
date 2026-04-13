type Service = {
  title: string
  image: string
}

type ServicesPreviewSectionProps = {
  services: Service[]
}

export function ServicesPreviewSection({ services }: ServicesPreviewSectionProps) {
  return (
    <section className="container section">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((item) => (
          <article key={item.title} className="service-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <button>Learn More</button>
          </article>
        ))}
      </div>
    </section>
  )
}
