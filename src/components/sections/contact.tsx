"use client"

import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { AtSignIcon } from "@/components/ui/at-sign"
import Link from "next/link"
import { YoutubeIcon } from "@/components/ui/youtube"
import { InstagramIcon } from "@/components/ui/instagram"
import { TwitterIcon } from "@/components/ui/twitter"
import { DiscordIcon } from "@/components/ui/discord"
import { TwitchIcon } from "@/components/ui/twitch"
import { TextAnimate } from "../text/animated"
import { motion } from "motion/react"
import { ReactNode } from "react"

export default function Contact() {
   return (
      <section className="py-16 max-w-5xl mx-auto grid md:grid-cols-7 gap-8">
         <div className="md:col-span-2">
            <TextAnimate className="text-lg md:text-xl font-medium font-sora">Get in Touch</TextAnimate>
         </div>
         
         <div className="md:col-span-5">
            <div className="flex flex-col">
               <TextAnimate as="h3" className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.1rem] leading-[1.1] font-sora font-bold">
                  Let's Create
               </TextAnimate>
               <TextAnimate as="h3" className="text-4xl text-muted-foreground md:text-5xl lg:text-6xl xl:text-[4.1rem] leading-[1.1] font-sora font-bold">
                  Something Together!
               </TextAnimate>
            </div>
            
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "my-8" })}>
               Contact me 
               <ArrowRight />
            </Link>
            
            <Separator className="mt-2"/>
            
            <div className="grid md:grid-cols-2 gap-x-6">
               <StaggerLink i={0}>
                  <Link href={process.env.NEXT_PUBLIC_EMAIL_LINK!} className="py-6 flex justify-between border-b group">
                     <div className="flex items-center gap-2 font-medium font-sora">
                        <AtSignIcon className="w-5 h-5"/>
                        Email
                     </div>
                     
                     <ArrowRight className="w-6 h-6 shrink-0 -rotate-45 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5}/>
                  </Link>
               </StaggerLink>
               <StaggerLink i={1}>
                  <Link href={process.env.NEXT_PUBLIC_YOUTUBE_LINK!} className="py-6 flex justify-between border-b group">
                     <div className="flex items-center gap-2 font-medium font-sora">
                        <YoutubeIcon className="w-5 h-5"/>
                        Youtube
                     </div>
                     
                     <ArrowRight className="w-6 h-6 shrink-0 -rotate-45 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5}/>
                  </Link>
               </StaggerLink>
               <StaggerLink i={2}>
                  <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK!} className="py-6 flex justify-between border-b group">
                     <div className="flex items-center gap-2 font-medium font-sora">
                        <InstagramIcon className="w-5 h-5"/>
                        Instagram
                     </div>
                     
                     <ArrowRight className="w-6 h-6 shrink-0 -rotate-45 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5}/>
                  </Link>
               </StaggerLink>
               <StaggerLink i={3}>
                  <Link href={process.env.NEXT_PUBLIC_TWITTER_LINK!} className="py-6 flex justify-between border-b group">
                     <div className="flex items-center gap-2 font-medium font-sora">
                        <TwitterIcon className="w-5 h-5"/>
                        Twitter
                     </div>
                     
                     <ArrowRight className="w-6 h-6 shrink-0 -rotate-45 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5}/>
                  </Link>
               </StaggerLink>
               <StaggerLink i={3}>
                  <Link href={process.env.NEXT_PUBLIC_DISCORD_LINK!} className="py-6 flex justify-between border-b group">
                     <div className="flex items-center gap-2 font-medium font-sora">
                        <DiscordIcon className="w-5 h-5"/>
                        Discord
                     </div>
                     
                     <ArrowRight className="w-6 h-6 shrink-0 -rotate-45 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5}/>
                  </Link>
               </StaggerLink>
               <StaggerLink i={3}>
                  <Link href={process.env.NEXT_PUBLIC_TWITCH_LINK!} className="py-6 flex justify-between border-b group">
                     <div className="flex items-center gap-2 font-medium font-sora">
                        <TwitchIcon className="w-5 h-5"/>
                        Twitter
                     </div>
                     
                     <ArrowRight className="w-6 h-6 shrink-0 -rotate-45 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5}/>
                  </Link>
               </StaggerLink>
            </div>
         </div>
      </section>
   )
}

interface StaggerLinkProps {
   children: ReactNode
   i: number
}

function StaggerLink({ children, i }: StaggerLinkProps) {
   return (
      <motion.div
         initial={{
            y: 50,
            opacity: 0
         }}
         whileInView={{
            y: 0,
            opacity: 1
         }}
         transition={{
            duration: 0.4,
            delay: 0.125 * 1
         }}
         viewport={{
            once: true
         }}
      >
      {children}
   </motion.div>
   )
}