import About from "@/components/sections/about"
import Hero from "@/components/sections/hero"

const Page = () => {
  return (
    <main className="w-[min(1200px,90%)] mx-auto">
      <Hero />
      <About />
    </main>
  )
}


export default Page