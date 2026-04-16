import './AboutPage.css'
export function AboutPage() {
  return (
    <div className="container section">
      <p className="eyebrow">About Us</p>
      <h1>Who We Are</h1>
      <div className="about-hero">
        <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200" alt="Cleaning team at work" />
        <img src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1200" alt="Office cleaning service" />
      </div>
      <div className="three-col">
        <article><h3>Our Story</h3><p>We started with one mission: healthier spaces through trusted cleaning.</p></article>
        <article><h3>Our Mission</h3><p>Deliver clean spaces with safe products and dependable teams.</p></article>
        <article><h3>100% Organic</h3><p>We prioritize eco-safe solutions that protect your family.</p></article>
      </div>
      <section className="partners">
        <h2>Our Business Partners</h2>
        <div className="partner-grid">
          <span>Iconic</span><span>Microwave</span><span>Smile</span><span>Retro</span><span>Natural</span><span>Hustler</span>
        </div>
      </section>
    </div>
  )
}
