import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Leaf, ArrowRight, ShieldCheck, CalendarX2, HeartHandshake } from 'lucide-react'
import './PricingPage.css'

export function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="pricing-page">
      {/* Header Section */}
      <motion.div 
        className="pricing-header section container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="pricing-subtitle">
          Pricing Plans
          <Leaf className="leaf-icon" color="#3f704d" />
        </h2>
        <h1 className="pricing-title">Transparent Pricing,<br/>No Surprises.</h1>
        <p className="pricing-desc">
          Choose the perfect cleaning plan for your home. Enjoy a pristine space every time with our trusted professionals.
        </p>

        {/* Custom Toggle */}
        <div className="pricing-toggle-container">
          <span className={`toggle-label ${!isYearly ? 'active' : ''}`}>Monthly</span>
          <button 
            className={`pricing-toggle ${isYearly ? 'yearly' : ''}`}
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Toggle billing cycle"
          >
            <div className="toggle-circle"></div>
          </button>
          <span className={`toggle-label ${isYearly ? 'active' : ''}`}>
            Yearly <span className="save-badge">Save 15%</span>
          </span>
        </div>
      </motion.div>

      {/* Pricing Cards Section */}
      <motion.div 
        className="container pricing-grid section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {/* Tier 1: Starter */}
        <motion.div 
          className="pricing-card starter" 
          variants={fadeInUp}
          onMouseMove={handleMouseMove}
        >
          <div className="card-top">
            <h3>Starter Clean</h3>
            <p className="tier-desc">Perfect for small apartments or basic upkeep.</p>
            <div className="price-block">
              <span className="currency">$</span>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={isYearly ? 'yearly' : 'monthly'}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="amount"
                >
                  {isYearly ? '89' : '105'}
                </motion.span>
              </AnimatePresence>
              <span className="cycle">/ mo</span>
            </div>
          </div>
          <div className="card-bottom">
            <button className="pricing-btn outline">Get Started</button>
            <ul className="feature-list">
              <li><CheckCircle2 size={18} className="check-icon" /> 2 Bedrooms, 1 Bath</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Dusting & Vacuuming</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Kitchen Surface Wipe</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Standard Eco Products</li>
            </ul>
          </div>
        </motion.div>

        {/* Tier 2: Popular */}
        <motion.div 
          className="pricing-card popular" 
          variants={fadeInUp}
          onMouseMove={handleMouseMove}
        >
          <div className="popular-ribbon">Best Value</div>
          <div className="card-top">
            <h3>Premium Shine</h3>
            <p className="tier-desc">Our most popular plan for families and average homes.</p>
            <div className="price-block">
              <span className="currency">$</span>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={isYearly ? 'yearly' : 'monthly'}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="amount"
                >
                  {isYearly ? '149' : '175'}
                </motion.span>
              </AnimatePresence>
              <span className="cycle">/ mo</span>
            </div>
          </div>
          <div className="card-bottom">
            <button className="pricing-btn solid">Choose Premium <ArrowRight size={16} /></button>
            <ul className="feature-list">
              <li><CheckCircle2 size={18} className="check-icon" /> Up to 4 Bedrooms, 3 Baths</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Deep Vacuuming & Mopping</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Full Kitchen & Inside Appliances</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Window Sills & Baseboards</li>
            </ul>
          </div>
        </motion.div>

        {/* Tier 3: Enterprise / Deep Clean */}
        <motion.div 
          className="pricing-card enterprise" 
          variants={fadeInUp}
          onMouseMove={handleMouseMove}
        >
          <div className="card-top">
            <h3>Deep Clean Plus</h3>
            <p className="tier-desc">Complete top-to-bottom sanitization for ultimate freshness.</p>
            <div className="price-block">
              <span className="currency">$</span>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={isYearly ? 'yearly' : 'monthly'}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="amount"
                >
                  {isYearly ? '249' : '295'}
                </motion.span>
              </AnimatePresence>
              <span className="cycle">/ mo</span>
            </div>
          </div>
          <div className="card-bottom">
            <button className="pricing-btn outline white">Contact Us</button>
            <ul className="feature-list">
              <li><CheckCircle2 size={18} className="check-icon" /> Unlimited Spaces</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Heavy Duty Scrubbing</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Carpet Steam Cleaning</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Upholstery & Blinds included</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Trust Section */}
      <motion.div 
        className="container trust-section section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="trust-grid">
          <motion.div className="trust-item" variants={fadeInUp}>
            <div className="trust-icon-box">
              <CalendarX2 size={28} color="#3f704d" />
            </div>
            <h4>Cancel Anytime</h4>
            <p>No binding long-term contracts. Pause or cancel your subscription seamlessly.</p>
          </motion.div>
          <motion.div className="trust-item" variants={fadeInUp}>
            <div className="trust-icon-box">
              <ShieldCheck size={28} color="#efcf7b" />
            </div>
            <h4>Vetted Professionals</h4>
            <p>Every cleaner is background-checked, insured, and rigorously trained.</p>
          </motion.div>
          <motion.div className="trust-item" variants={fadeInUp}>
            <div className="trust-icon-box">
              <HeartHandshake size={28} color="#ff8563" />
            </div>
            <h4>100% Satisfaction</h4>
            <p>If you're ever unhappy with our service, we'll re-clean it for free.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
