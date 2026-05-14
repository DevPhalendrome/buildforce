import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Gallery from '@/components/sections/Gallery'
import About from '@/components/sections/About'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <About />
      <CTA />
      <Contact />
    </>
  )
}
