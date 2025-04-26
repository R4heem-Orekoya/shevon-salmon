import About from "@/components/sections/about"
import Companies from "@/components/sections/companies"
import Contact from "@/components/sections/contact"
import Faq from "@/components/sections/faq"
import Hero from "@/components/sections/hero"
import S7on from "@/components/sections/s7on"
import Testimonials from "@/components/sections/testimonials"
import Videos from "@/components/sections/videos"

const Page = () => {
  return (
    <main className="w-[min(1200px,90%)] mx-auto">
      <Hero />
      <About />
      <Companies />
      <Videos />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  )
}


export default Page