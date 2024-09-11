import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'
import FaqsPage from './faqs'
import SupportPage from './support'
import { useRef } from 'react'

export default function HomePage() {
  const scrollRevealRef = useRef<HTMLDivElement | null>(null)

  const addToScrollRevealRef = () => {
    if (scrollRevealRef.current) {
      scrollRevealRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <Layout>
        <Hero
          scroll={addToScrollRevealRef}
          title="Findee"
          content="Discover the world with personalized, AI-powered travel 

          recommendations that match your unique preferences and 
          
          experiences."
          illustration={<HeroIllustration />}
        />
      </Layout>
      <SupportPage scrollRef={scrollRevealRef} />
      <FaqsPage />
    </>
  )
}
