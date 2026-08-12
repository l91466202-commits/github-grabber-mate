import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { CinematicIntro } from '@/components/CinematicIntro'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { PracticeAreas } from '@/components/PracticeAreas'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { FloatingActions } from '@/components/FloatingActions'
import { Chatbot } from '@/components/Chatbot'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CinematicIntro />
      <GrainOverlay />
      <Navigation />

      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <FloatingActions />
    </div>
  )
}
