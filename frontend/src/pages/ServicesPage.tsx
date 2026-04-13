import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { faqs, services } from '../data/content'
import type { RootState } from '../app/store'
import { setActiveServiceFilter } from '../app/store'

async function getServices() {
  return Promise.resolve(services)
}

const filters = ['all', 'home', 'fabric', 'pet']

export function ServicesPage() {
  const dispatch = useDispatch()
  const activeFilter = useSelector((state: RootState) => state.ui.activeServiceFilter)
  const { data = [] } = useQuery({ queryKey: ['services'], queryFn: getServices })

  const visible = activeFilter === 'all' ? data : data.filter((s) => s.category === activeFilter)

  return (
    <div className="container section">
      <p className="eyebrow">Services</p>
      <h1>Services We Provide</h1>
      <div className="filter-row">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? 'active' : ''}
            onClick={() => dispatch(setActiveServiceFilter(filter))}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="service-grid">
        {visible.map((item) => (
          <article key={item.title} className="service-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <button>Learn More</button>
          </article>
        ))}
      </div>

      <section className="faq-wrap">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((question) => (
          <Accordion key={question}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>{question}</AccordionSummary>
            <AccordionDetails>
              Our team will guide you based on your space type, timeline, and preferred cleaning method.
            </AccordionDetails>
          </Accordion>
        ))}
      </section>
    </div>
  )
}
