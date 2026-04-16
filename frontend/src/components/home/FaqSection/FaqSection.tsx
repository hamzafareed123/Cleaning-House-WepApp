import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../../../data/content'
import faqCleaners from '../../../assets/faq_cleaners.png'
import './FaqSection.css'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container">
      <section className="faq-section-wrapper">
        <h2 className="faq-title">
          Frequently Asked Questions <span className="text-coral">?</span>
        </h2>
        
        <div className="faq-grid">
          {/* Left Column: Custom Accordions */}
          <div className="faq-accordion-list">
            {faqs.map((question: string, idx: number) => {
              const isOpen = openIndex === idx
              return (
                <div 
                  key={idx} 
                  className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                >
                  <button 
                    className="faq-accordion-header"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{question}</span>
                    {isOpen ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                  </button>
                  <div className="faq-accordion-content" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
                    <div className="faq-accordion-body">
                      We provide a wide range of services including residential, commercial, deep cleaning, carpet and window cleaning, and eco-friendly options tailored to your needs.
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Image and Contact Card */}
          <div className="faq-media-column">
            <img src={faqCleaners} alt="Cleaners at work" className="faq-cleaners-img" />
            
            <div className="faq-contact-card">
              <h3>Do you have more questions?</h3>
              <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
              <button className="faq-contact-btn">Shoot a Direct Mail</button>
            </div>
          </div>
        </div>

        {/* Floating Absolute Overlay */}
        <div className="newsletter-wrapper">
          <div className="newsletter-card">
            <div className="newsletter-copy">
              <h3>Subscribe Newsletter</h3>
              <p>Financial transactions remotely using a mobile</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email." />
              <button>GET START</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
