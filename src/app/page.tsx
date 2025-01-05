import { RiHandbagFill, RiHandbagLine } from "@remixicon/react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Portrait from "../../public/shevon-portrait.jpg"
import AsusImage from "../../public/asus-aesthetic.jpg"
import WatchImage from "../../public/watch.jpg"
import SpaceImage from "../../public/space.jpg"

const Page = () => {
  return (
    <main className="w-[min(1200px,90%)]  mx-auto">
      <section className="relative min-h-[calc(100dvh-70px)]">
        <div className="relative h-[calc(100dvh-70px)] flex flex-col items-center justify-center pb-32">
          <div className="relative size-36 rounded-full overflow-hidden text-center">
            <Image src={Portrait} alt="Shevon Salmon portrait picture" fill className="object-cover"/>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-mono_sans pt-4 pb-1 tracking-tight">
            Hi, I'm Shevon Salmon
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center">Digital Creator and Lifestyle Enthusiast</p>
        </div>
        
        <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex justify-between items-baseline text-sm font-medium">
          <Link href={process.env.NEXT_PUBLIC_GUMROAD_URL!} className="flex items-center gap-2">
            <ArrowDown className="w-4 h-4 animate-bounce"/> 
            Scroll to Explore
          </Link>
          
          <div className="sm:flex items-center gap-4 hidden">
            <div className="relative overflow-hidden w-28 h-32 bg-zinc-100 rounded-md">
              <Image src={WatchImage} alt="Shevon Salmon Image" fill className="object-cover"/>
            </div>
            <div className="relative overflow-hidden w-28 h-32 bg-zinc-100 rounded-md">
              <Image src={AsusImage} alt="Shevon Salmon Image" fill className="object-cover"/>
            </div>
            <div className="relative overflow-hidden w-28 h-32 bg-zinc-100 rounded-md">
              <Image src={SpaceImage} alt="Shevon Salmon Image" fill className="object-cover"/>
            </div>
          </div>
          
          <Link href={process.env.NEXT_PUBLIC_GUMROAD_URL!}className="flex items-center gap-2">
            <RiHandbagLine className="w-4 h-4"/>
            Digital Products
          </Link>
        </div>
      </section>
    </main>
  )
}


export default Page