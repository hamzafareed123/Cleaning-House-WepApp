import { useQuery } from '@tanstack/react-query'
import { services } from '../../data/content'
import { HeroSection } from '../../components/home/HeroSection/HeroSection'
import { HowItWorksSection } from '../../components/home/HowItWorksSection/HowItWorksSection'
import { WhyChooseUsSection } from '../../components/home/WhyChooseUsSection/WhyChooseUsSection'
import { ServicesPreviewSection } from '../../components/home/ServicesPreviewSection/ServicesPreviewSection'
import { TestimonialsSection } from '../../components/home/TestimonialsSection/TestimonialsSection'
import { FaqSection } from '../../components/home/FaqSection/FaqSection'

async function getFeaturedServices() {
  return Promise.resolve(services.slice(0, 3))
}

export function HomePage() {
  const { data: featured = [] } = useQuery({
    queryKey: ['featured-services'],
    queryFn: getFeaturedServices,
  })

  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <ServicesPreviewSection services={featured} />
      <TestimonialsSection />
      <FaqSection />
    </div>
  )
}
