"use client"

import { RiHandbagLine } from "@remixicon/react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Portrait from "~/shevon.jpg"
import AsusImage from "~/asus-aesthetic.jpg"
import WatchImage from "~/watch.jpg"
import SpaceImage from "~/space.jpg"
import { Particles } from "../ui/particles"
import { motion } from "motion/react"
import AnimatedText from "../text/animated"

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
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} className="relative size-36 rounded-full overflow-hidden text-center">
                  <Image src={Portrait} alt="Shevon Salmon portrait picture" fill className="object-cover" placeholder="blur" />
               </motion.div>
               <motion.h1
                  initial={{
                     opacity: 0,
                     y: 10,
                     filter: "blur(5px)" 
                  }}
                  animate={{
                     opacity: 1,
                     y: 0,
                     filter: "blur(0)" 
                  }}
                  transition={{
                     delay: 1.5,
                     duration: 0.3
                  }}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold font-mono_sans pt-4 pb-1 tracking-tight flex gap-1">
                  Hi, I'm Shevon Salmon
               </motion.h1>
               <motion.p
                  initial={{
                     opacity: 0,
                     y: 10,
                     filter: "blur(2px)" 
                  }}
                  animate={{
                     opacity: 1,
                     y: 0,
                     filter: "blur(0)" 
                  }}
                  transition={{
                     delay: 1.8,
                     duration: 0.3
                  }}
                  className="md:text-lg text-muted-foreground text-center max-w-md text-balance">
                  Discover the perfect blend of tech and lifestyle
               </motion.p>
            </div>
         </div>

         <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex justify-between items-baseline text-sm font-medium">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                  duration: 0.3,
                  delay: 0.8
               }}
            >
               <Link href={process.env.NEXT_PUBLIC_GUMROAD_URL!} className="flex items-center gap-2">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                  Scroll to Explore
               </Link>
            </motion.div>

            <div className="hidden sm:flex items-center justify-center gap-4 relative">
               {imagesData.map((item, index) => (
                  <motion.div
                     initial={{ opacity: 0, translateY: 30 }}
                     animate={{ opacity: 1, translateY: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.25 }}
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
                  </motion.div>
               ))}
            </div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                  duration: 0.3,
                  delay: 0.8
               }}
            >
               <Link href={process.env.NEXT_PUBLIC_GUMROAD_URL!} className="flex items-center gap-2">
                  <RiHandbagLine className="w-4 h-4 animate-wiggle" />
                  Digital Products
               </Link>
            </motion.div>
         </div>

         <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={"#000000"}
            refresh
         />
      </section>
   );
}

export default Hero;