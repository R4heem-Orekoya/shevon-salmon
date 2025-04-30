import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Question from "~/question-mark.svg"
import { TextAnimate } from "../text/animated"
import { HOME_PAGE_QUERYResult } from "@/root/sanity.types";
import PortableContent from "../portable-text";
 
interface FaqProps {
   content: HOME_PAGE_QUERYResult[number]["faqSection"]
}

export default function Faq({ content }: FaqProps) {
   return (
      <section className="py-16 max-w-5xl mx-auto grid gap-8 md:grid-cols-5">
         <div className="md:col-span-2 flex flex-col justify-between">
            <div className="max-sm:text-center">
               <TextAnimate as="h2" className="text-xl md:text-2xl lg:text-3xl font-semibold font-sora tracking-tight">
                  {content?.heading ?? "FAQs"}
               </TextAnimate>
               <TextAnimate as="p" className="text-muted-foreground mt-2 max-w-lg leading-1 font-dm_sans">
                  {content?.subHeading ?? "Got questions? I’ve answered the ones I get asked the most about my content, gear, and how I run things."}

               </TextAnimate>
            </div>
            <div className="max-md:hidden w-[70%] aspect-square mx-auto relative">
               <Image src={Question} alt="question mark illustration" className="w-full h-full object-cover" fill />
            </div>
         </div>
         <Accordion type="single" collapsible className="md:col-span-3">
            {content?.faqs?.map((faq, i) => (
               <AccordionItem value={`item-${i}`} key={faq.question}>
                  <AccordionTrigger className="text-lg md:text-xl font-sora opacity-75">{faq.question}</AccordionTrigger>
                  <AccordionContent className="md:text-lg text-muted-foreground">
                     <PortableContent value={faq.answer} />
                  </AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>
      </section>
   )
}
