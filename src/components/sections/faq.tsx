import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Question from "~/question-mark.svg"
import { TextAnimate } from "../text/animated"

const faqs = [
   {
     question: "How did Shevon get started on YouTube?",
     answer:
       "Shevon started by sharing his passion for tech and aesthetics, creating clean, honest videos about gear and lifestyle. Over time, his unique style attracted a dedicated audience."
   },
   {
     question: "How often does Shevon post new content?",
     answer:
       "While there’s no fixed schedule, Shevon consistently uploads new content—usually when it’s something worth sharing or well thought out."
   },
   {
     question: "Can I suggest a video idea to Shevon?",
     answer:
       "Yes! He pays attention to feedback in the comments and on social media, so feel free to drop your ideas there."
   },
   {
     question: "Does Shevon travel for content?",
     answer:
       "Sometimes. If it fits the video concept or helps tell the story better, you’ll catch him switching locations or taking viewers on a quick trip."
   },
   {
     question: "Can I meet Shevon at events or expos?",
     answer:
       "He occasionally attends tech events, meetups, or brand activations. Keep an eye on his Instagram for updates."
   },
   {
     question: "How can I keep up with Shevon’s latest gear or setups?",
     answer:
       "He often shares his updated desk setups, gear breakdowns, and favorite tools directly in his videos or via Instagram posts and stories."
   },
   {
     question: "Is Shevon open to podcast interviews or features?",
     answer:
       "Yes, he's open to interviews or features that align with his brand. Reach out via the contact page for inquiries."
   }
 ];
 

export default function Faq() {
   return (
      <section className="py-16 max-w-5xl mx-auto grid gap-8 md:grid-cols-5">
         <div className="md:col-span-2 flex flex-col justify-between">
            <div className="max-sm:text-center">
               <TextAnimate as="h2" className="text-xl md:text-2xl lg:text-3xl font-semibold font-sora tracking-tight">
                  FAQs
               </TextAnimate>
               <TextAnimate as="p" className="text-muted-foreground mt-2 max-w-lg leading-1 font-dm_sans">
                  Got questions? I’ve answered the ones I get asked the most about my content, 
                  gear, and how I run things.
               </TextAnimate>
            </div>
            <div className="max-md:hidden w-[70%] aspect-square mx-auto relative">
               <Image src={Question} alt="question mark illustration" className="w-full h-full object-cover" fill />
            </div>
         </div>
         <Accordion type="single" collapsible className="md:col-span-3">
            {faqs.map((faq, i) => (
               <AccordionItem value={`item-${i}`} key={faq.question}>
                  <AccordionTrigger className="text-lg md:text-xl font-sora opacity-75">{faq.question}</AccordionTrigger>
                  <AccordionContent className="md:text-lg text-muted-foreground">
                     {faq.answer}
                  </AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>

      </section>
   )
}
