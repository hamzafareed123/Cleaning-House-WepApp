import { useQuery } from '@tanstack/react-query'
import { services } from '../../data/content'
import { motion } from 'framer-motion'
import { Leaf, ArrowUpRight } from 'lucide-react'
import { FaqSection } from '../../components/home/FaqSection/FaqSection'
import './ServicesPage.css'

async function getServices() {
  return Promise.resolve(services)
}

export function ServicesPage() {
  const { data: visible = [] } = useQuery({ queryKey: ['services'], queryFn: getServices })

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
    <div className="services-page">
      {/* Header Section */}
      <motion.div 
        className="services-header section container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="services-subtitle">
          Services
          <Leaf className="leaf-icon" color="#3f704d" />
        </h2>
        <h1 className="services-title">Services We Provide..</h1>
      </motion.div>

      {/* Grid Section */}
      <motion.div 
        className="container service-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {visible.map((item: { title: string; image: string }) => (
          <motion.article key={item.title} className="service-card" variants={fadeInUp}>
            <div className="service-card-inner">
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <button className="learn-more-btn">
                <ArrowUpRight size={18} /> Learn More
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* What We Dont Do Section */}
      <motion.div 
        className="container section dont-do-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="dont-do-box">
          <Leaf className="dont-do-leaf" color="#69a341" fill="#437728" />
          <div className="dont-do-header">
            <h2>What We Dont Do?</h2>
            <div className="green-line"></div>
          </div>
          <div className="dont-do-content">
            <ul className="dont-do-list">
              <li>We don't compromise on quality.</li>
              <li>We don't use harsh or harmful chemicals.</li>
              <li>We don't cut corners during cleaning.</li>
              <li>We don't miss hidden spots or details.</li>
              <li>We don't ignore customer feedback.</li>
            </ul>
            <ul className="dont-do-list right">
              <li>We don't rush the job - we clean with care.</li>
              <li>We don't leave a mess behind.</li>
              <li>We don't charge hidden or surprise fees.</li>
              <li>We don't let unverified cleaners handle your home.</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <FaqSection hideNewsletter />
      </motion.div>
    </div>
  )
}
