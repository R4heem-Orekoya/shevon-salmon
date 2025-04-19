import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { AtSignIcon } from "@/components/ui/at-sign"
import Link from "next/link"
import { YoutubeIcon } from "@/components/ui/youtube"
import { InstagramIcon } from "@/components/ui/instagram"
import { TwitterIcon } from "@/components/ui/twitter"

const Contact = () => {
   return (
      <section className="py-16 max-w-5xl mx-auto grid md:grid-cols-7 gap-8">
         <div className="md:col-span-2">
            <h2 className="text-lg md:text-xl font-medium font-mono_sans">Get in Touch</h2>
         </div>
         
         <div className="md:col-span-5">
            <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.1rem] leading-[1.1] font-bold">
               Let's Create <br /> <span className="text-muted-foreground">Something Together!</span>
            </h3>
            
            <Button size="lg" className="my-8">
               Contact me 
               <ArrowRight />
            </Button>
            
            <Separator className="mt-2"/>
            
            <div className="grid md:grid-cols-2 gap-x-6">
               <Link href="#" className="py-6 flex justify-between border-b group">
                  <div className="flex items-center gap-2 font-medium font-mono_sans">
                     <AtSignIcon className="w-5 h-5"/>
                     Email
                  </div>
                  
                  <ArrowRight className="w-6 h-6 shrink-0 -rotate-45 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5}/>
               </Link>
               <Link href="#" className="py-6 flex justify-between border-b group">
                  <div className="flex items-center gap-2 font-medium font-mono_sans">
                     <YoutubeIcon className="w-5 h-5"/>
                     Youtube
                  </div>
                  
                  <ArrowRight className="w-6 h-6 shrink-0 -rotate-45 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5}/>
               </Link>
               <Link href="#" className="py-6 flex justify-between border-b group">
                  <div className="flex items-center gap-2 font-medium font-mono_sans">
                     <InstagramIcon className="w-5 h-5"/>
                     Instagram
                  </div>
                  
                  <ArrowRight className="w-6 h-6 shrink-0 -rotate-45 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5}/>
               </Link>
               <Link href="#" className="py-6 flex justify-between border-b group">
                  <div className="flex items-center gap-2 font-medium font-mono_sans">
                     <TwitterIcon className="w-5 h-5"/>
                     Twitter
                  </div>
                  
                  <ArrowRight className="w-6 h-6 shrink-0 -rotate-45 group-hover:rotate-0 transition-all duration-500" strokeWidth={1.5}/>
               </Link>
            </div>
         </div>
      </section>
   )
}

export default Contact