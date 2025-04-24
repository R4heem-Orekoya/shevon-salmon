"use client"

import Image from "next/image"
import ShevonPortrait from "~/shevon_2.jpg"
import { TextAnimate } from "../text/animated"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { motion } from "motion/react"

export default function About(){
   return (
      <section className="pt-12 pb-12 md:pt-32 md:pb-16 max-w-5xl mx-auto">
         <div className="flex flex-col items-center gap-3 text-center">
            <TextAnimate 
               as="h2" 
               animation="blurInUp"
               className="text-2xl font-sora font-semibold tracking-tight sm:text-3xl xl:text-4xl"
            >
               About Me
            </TextAnimate>
            <TextAnimate as="p" animation="fadeIn" className="max-w-sm text-muted-foreground">
               More than a creator—this is a lifestyle powered by innovation and style.
            </TextAnimate>
         </div>

         <div className="max-w-3xl my-12 space-y-4 text-left sm:text-center text-lg sm:text-xl mx-auto text-muted-foreground">
            <TextAnimate as="p" animation="fadeIn">
               I’m Shevon Salmon—a content creator passionate about capturing stories that live at the intersection of technology and personal style. From unboxing the latest gadgets to creating visual stories that inspire, I love sharing moments that resonate.
            </TextAnimate>
            <TextAnimate as="p" animation="fadeIn">
               Whether it's through clean visuals, thoughtful reviews, or lifestyle vlogs, my goal is to inspire the next generation of creatives and tech enthusiasts.
            </TextAnimate>
            <TextAnimate as="p" animation="fadeIn">
               When I'm not filming or editing, you’ll find me exploring new gear, optimizing setups, or brainstorming the next aesthetic video idea.
            </TextAnimate>
         </div>
         <motion.div
            initial={{
               opacity: 0, scale: 0.8,
               filter: 'blur(7px)'
            }}
            whileInView={{
               opacity: 1,
               scale: 1,
               filter: 'blur(0px)',
            }}
            transition={{
               duration: 0.8,
               delay: 0.125
            }}
            viewport={{
               once: true
            }}
            className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden"
         >
            <Image src={ShevonPortrait} alt="a portrait of shevon salmon" fill className="w-full h-full object-cover"/>
         </motion.div>

         <motion.div 
            initial={{
               opacity: 0, 
               y: 20
            }}
            whileInView={{
               opacity: 1,
               y: 0
            }}
            transition={{
               duration: 0.5,
               delay: 0.125
            }}
            viewport={{
               once: true
            }}
            className="mt-8 flex flex-wrap justify-center gap-4"
         >
            <Link href="https://youtube.com/@shevonsalmon" className={buttonVariants({ size: "lg"})}>
               Watch on YouTube
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
               Work with Me
            </Link>
         </motion.div>
      </section>
   )
}
