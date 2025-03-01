import About from "@/components/sections/about"
import Companies from "@/components/sections/companies"
import Faq from "@/components/sections/faq"
import Hero from "@/components/sections/hero"
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
    </main>
  )
}


export default Page