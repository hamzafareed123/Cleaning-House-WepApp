import { useQuery } from '@tanstack/react-query'
import { services } from '../data/content'
import { HeroSection } from '../components/home/HeroSection'
import { HowItWorksSection } from '../components/home/HowItWorksSection'
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection'
import { ServicesPreviewSection } from '../components/home/ServicesPreviewSection'

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
    </div>
  )
}
