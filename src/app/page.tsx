import About from "@/components/sections/about"
import Hero from "@/components/sections/hero"
import Videos from "@/components/sections/videos"

const Page = () => {
  return (
    <main className="w-[min(1200px,90%)] mx-auto">
      <Hero />
      <About />
      <Videos />
    </main>
  )
}


export default Page