"use client"

import Image from "next/image"
import { TextAnimate } from "../text/animated"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { motion } from "motion/react"
import { HOME_PAGE_QUERYResult } from "@/root/sanity.types"
import { urlFor } from "@/sanity/utils/image"
import PortableContent from "@/components/portable-text"
import { PortableTextBlock } from "next-sanity"

interface AboutProps { 
   content: HOME_PAGE_QUERYResult[number]["aboutSection"]
}

export default function About({ content }: AboutProps){
   return (
      <section className="pt-12 pb-12 md:pt-32 md:pb-16 max-w-5xl mx-auto">
         <div className="flex flex-col items-center gap-3 text-center">
            <TextAnimate 
               as="h2" 
               animation="blurInUp"
               className="text-2xl font-sora font-semibold tracking-tight sm:text-3xl xl:text-4xl"
            >
               {content?.heading ?? "About Me"}
            </TextAnimate>
            <TextAnimate as="p" animation="fadeIn" className="max-w-sm text-muted-foreground">
               {content?.subHeading ?? "More than a creator—this is a lifestyle powered by innovation and style."}
            </TextAnimate>
         </div>

         <div className="max-w-3xl my-12 space-y-4 text-left sm:text-center text-lg sm:text-xl mx-auto text-muted-foreground">
            <PortableContent value={content?.content! as PortableTextBlock[]} />
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
            <Image 
               src={urlFor(content?.image?.asset?.url!).quality(80).url()} 
               alt="a portrait of shevon salmon" 
               fill className="w-full h-full object-cover"
               placeholder="blur"
               blurDataURL={content?.image?.asset?.metadata?.lqip!}
            />
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
            <Link href="https://youtube.com/@shevonsalmon" target="_blank" className={buttonVariants({ size: "lg"})}>
               Watch on YouTube
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
               Work with Me
            </Link>
         </motion.div>
      </section>
   )
}
