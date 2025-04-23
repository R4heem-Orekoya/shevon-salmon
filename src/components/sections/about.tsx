"use client"

import Image from "next/image"
import London from "~/london.jpg"
import ShevonPortrait from "~/shevon.jpg"
import Space from "~/space.jpg"
import { motion } from "motion/react"
import { BlurFade } from "../blur-fade"
import SlideText from "../text/slide"


const About = () => {
   return (
      <section className="pt-12 pb-12 md:pt-32 md:pb-16 max-w-5xl mx-auto">
         <div className="grid md:grid-cols-2 gap-10">
            <div className="col-span-1 rounded-lg grid grid-cols-2 gap-4">
               <BlurFade blur="3px" direction="down" offset={15} inView duration={0.5} delay={0.25} className="relative col-span-2 h-64 bg-zinc-100 transition-transform duration-300 rounded-md overflow-hidden">
                  <Image src={ShevonPortrait} alt="Image of shevon salmon" fill className="object-cover" />
               </BlurFade>
               <BlurFade blur="3px" direction="right" offset={15} inView duration={0.5} delay={0.5} className="relative col-span-1 h-48 bg-zinc-100 transition-transform duration-300  rounded-md overflow-hidden">
                  <Image src={Space} alt="Image of shevon salmon" fill className="object-cover" />
               </BlurFade>
               <BlurFade blur="3px" direction="left" offset={15} inView duration={0.5} delay={0.75} className="relative col-span-1 h-48 bg-zinc-100 transition-transform duration-300 rounded-md overflow-hidden">
                  <Image src={London} alt="Image of shevon salmon" fill className="object-cover" />
               </BlurFade>
            </div>
            <div className="py-4 flex flex-col justify-center">
               <SlideText as="h2" className="text-2xl font-mono_sans font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  About Me
               </SlideText>
               <div className="mt-6 space-y-6 text-muted-foreground">
                  <SlideText as="p">
                     Hey there! I'm Shevon Salmon — a tech-savvy lifestyle YouTuber passionate about creating content that educates, inspires, and entertains.
                  </SlideText>
                  <SlideText as="p">
                     On my channel, you'll find everything from product reviews and tech deep-dives to day-in-the-life vlogs and creative gear setups. I love sharing what I learn and what I love with a community that’s always growing.
                  </SlideText>
                  <SlideText as="p">
                     Let’s explore creativity, technology, and lifestyle together — and if you’re into all that, make sure to subscribe and join the journey!
                  </SlideText>
               </ div>
            </div>
         </div>
      </section>
   )
}

export default About
