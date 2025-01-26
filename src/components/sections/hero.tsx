import { RiHandbagLine } from "@remixicon/react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Portrait from "../../../public/shevon-portrait.jpg"
import AsusImage from "../../../public/asus-aesthetic.jpg"
import WatchImage from "../../../public/watch.jpg"
import SpaceImage from "../../../public/space.jpg"
import { SparklesText } from "@/components/ui/sparkles-text";

const imagesData = [
   {
      src: WatchImage,
      alt: "Watch lifestyle image",
      id: "image-1"
   },
   {
      src: AsusImage,
      alt: "Asus aesthetic setup",
      id: "image-2"
   },
   {
      src: SpaceImage,
      alt: "Workspace setup",
      id: "image-3"
   }
]

const Hero = () => {
   return (
      <section className="relative min-h-[calc(100dvh-70px)]">
         <div className="relative h-[calc(100dvh-70px)] flex flex-col items-center justify-center pb-32">
            <div className="flex flex-col items-center">
               <div className="relative size-36 rounded-full overflow-hidden text-center">
                  <Image src={Portrait} alt="Shevon Salmon portrait picture" fill className="object-cover" placeholder="blur" />
               </div>
               <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-mono_sans pt-4 pb-1 tracking-tight flex gap-1">
                  Hi, I'm Shevon Salmon
                  {/* <SparklesText 
                     text="Shevon Salmon" 
                     sparklesCount={5} 
                     className="text-xl md:text-2xl lg:text-3xl font-mono_sans"
                     colors={{ first: "#A78BFA", second: "#A78BFA" }}
                  />  */}  
               </h1>
               <p className="md:text-lg text-muted-foreground text-center max-w-md text-balance">
                  Discover the perfect blend of tech and lifestyle
               </p>
            </div>
         </div>

         <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex justify-between items-baseline text-sm font-medium px-4">
            <Link href={process.env.NEXT_PUBLIC_GUMROAD_URL!} className="flex items-center gap-2">
               <ArrowDown className="w-4 h-4 animate-bounce" />
               Scroll to Explore
            </Link>

            <div className="hidden sm:flex items-center justify-center gap-4 relative">
               {imagesData.map((item, index) => (
                  <div
                     key={item.id}
                     className="relative overflow-hidden w-28 h-32 aspect-video bg-zinc-100 rounded-md"
                  >
                     <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        placeholder="blur"
                     />
                  </div>
               ))}
            </div>

            <Link href={process.env.NEXT_PUBLIC_GUMROAD_URL!} className="flex items-center gap-2">
               <RiHandbagLine className="w-4 h-4 animate-wiggle" />
               Digital Products
            </Link>
         </div>
      </section>
   );
}

export default Hero;