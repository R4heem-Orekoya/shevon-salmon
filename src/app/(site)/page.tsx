import About from "@/components/sections/about"
import Companies from "@/components/sections/companies"
import Contact from "@/components/sections/contact"
import Faq from "@/components/sections/faq"
import Hero from "@/components/sections/hero"
import Testimonials from "@/components/sections/testimonials"
import Videos from "@/components/sections/videos"
import { HOME_PAGE_QUERYResult } from "@/root/sanity.types"
import { sanityFetch } from "@/sanity/utils/live"
import { HOME_PAGE_QUERY } from "@/sanity/utils/queries"

export default async function Page(){
  const res = await sanityFetch({
    query: HOME_PAGE_QUERY,
    tags: ["homePage"]
  })
  
  const data: HOME_PAGE_QUERYResult[number] = res.data[0]
  
  return (
    <main className="w-[min(1200px,90%)] mx-auto">
      <Hero content={data.heroSection} />
      <About content={data.aboutSection} />
      <Companies content={data.companiesSection} />
      <Videos content={data.ytVideosSection} />
      <Testimonials content={data.testimonialsSection}/>
      <Faq content={data.faqSection}/>
      <Contact />
    </main>
  )
}