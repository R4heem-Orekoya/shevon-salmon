import { Marquee } from "@/components/ui/marquee";
import { cn, getRandomColor } from "@/lib/utils";
import { TextAnimate } from "../text/animated";
import { HOME_PAGE_QUERYResult } from "@/root/sanity.types"
import { Quote } from "lucide-react";

interface TestimonialsProps {
   content: HOME_PAGE_QUERYResult[number]["testimonialsSection"]
}

const Testimonials = ({ content }: TestimonialsProps) => {
   const firstRow = content?.testimonials?.slice(0, content?.testimonials.length / 2)
   const secondRow = content?.testimonials?.slice(content?.testimonials.length / 2)
   
   return (
      <section className="py-16 max-w-5xl mx-auto">
         <div className="flex flex-col items-center gap-3 text-center">
            <TextAnimate
               as="h2" animation="blurInUp" className="text-2xl font-sora font-semibold tracking-tight sm:text-3xl xl:text-4xl"
            >
               {content?.heading ?? "Testimonials"}
            </TextAnimate>
            <TextAnimate
               as="p"
               className="max-w-sm text-muted-foreground"
            >
               {content?.subHeading ?? "Trusted by viewers. Backed by brands. Loved by the culture."}
            </TextAnimate>
         </div>

         <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-8">
            <Marquee pauseOnHover className="[--duration:20s]">
               {firstRow?.map((review) => (
                  <TestimonialCard key={review.author} author={review.author!} quote={review.quote!} />
               ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
               {secondRow?.map((review) => (
                  <TestimonialCard key={review.author} author={review.author!} quote={review.quote!} />
               ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white dark:from-background"></div>
         </div>
      </section>
   )
}

type TestimonialCardProps = {
   author: string;
   quote: string;
}

const TestimonialCard = ({ author, quote }: TestimonialCardProps) => {
   return (
      <div className="bg-zinc-100/30 p-3 sm:p-4 w-64 md:w-96 rounded-md border border-zinc-200/20">
         <div className="flex justify-between items-start">
            <div className="flex gap-3 items-center">
               <img
                  style={{
                     backgroundColor: getRandomColor()
                  }}
                  src={`https://api.dicebear.com/9.x/miniavs/svg?seed=${author}`} alt={author}
                  className={cn("size-12 rounded-full object-cover")}
               />

               <div className="flex flex-col">
                  <p className="text-sm font-semibold font-sora">{author}</p>
                  <p className="text-xs font-light text-muted-foreground italic">@{author}</p>
               </div>
            </div>
            
            <Quote className="text-muted-foreground fill-muted-foreground opacity-20 w-5 h-5" strokeWidth={1.5} />
         </div>

         <div className="mt-4">
            <p className="text-sm font-light">{quote}</p>
         </div>
      </div>
   )
}

export default Testimonials