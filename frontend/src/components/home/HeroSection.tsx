import { Check, Star } from 'lucide-react'
import googleIcon from '../../assets/google.png'
import heroImage from '../../assets/hero.png'

export function HeroSection() {
  return (
    <section
      className="hero container hero-exact shadow-sm"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-card exact-card">
        <h1>
          <span>FreshSpaces</span> - Eco-Friendly Cleaning for Every Space
        </h1>
        <p>Gentle on your home, tough on dirt. Naturally clean.</p>
        <div className="hero-actions">
          <button className="transition hover:brightness-95">Free Quote</button>
          <button className="transition hover:brightness-95">Services</button>
        </div>
        <div className="hero-features">
          <p><i><Check size={12} strokeWidth={3} /></i>Friendly</p>
          <p><i><Check size={12} strokeWidth={3} /></i>Convenient</p>
          <p><i><Check size={12} strokeWidth={3} /></i>Eco Friendly</p>
        </div>
      </div>
      <div className="hero-image" aria-hidden="true" />
      <div className="review-badge">
        <img className="google-logo" src={googleIcon} alt="Google" />
        <p className="stars">
          <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" />{' '}
          <Star size={14} fill="currentColor" /> <Star size={14} fill="currentColor" />{' '}
          <Star size={14} fill="currentColor" />
        </p>
        <p>5.0 rating from 492 reviews</p>
        <div className="review-avatars">
          <span>A</span><span>D</span><span>C</span><span className="count">+489</span>
        </div>
      </div>
    </section>
  )
}
