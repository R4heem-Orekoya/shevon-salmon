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
    query: HOME_PAGE_QUERY
  })
  
  const data: HOME_PAGE_QUERYResult[number] = res.data[0]
  
  console.log(data);
  
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