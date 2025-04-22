import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Question from "~/question-mark.svg"

const faqs = [
   {
      question: "Who is Shevon Salmon?",
      answer: "Shevon Salmon is a tech and lifestyle YouTuber known for high-quality content on gadgets, productivity, and everyday tech."
   },
   {
      question: "Where is Shevon Salmon from?",
      answer: "Shevon is based in [Insert Location], but his content reaches a global audience."
   },
   {
      question: "What type of content does Shevon create?",
      answer: "He focuses on tech reviews, lifestyle vlogs, desk setups, and productivity tips."
   },
   {
      question: "How can I request a product review?",
      answer: "If you're a brand looking for a collaboration, visit the [Contact Page] to reach out for partnerships."
   },
   {
      question: "What camera and equipment does Shevon use?",
      answer: "You can find a full list of Shevon’s setup and gear on the [Gear Page]."
   },
   {
      question: "What software does Shevon use to edit videos?",
      answer: "He primarily edits using [Insert Editing Software]."
   },
   {
      question: "How can I collaborate with Shevon?",
      answer: "For sponsorships and business inquiries, please fill out the form on the [Business Inquiries] page."
   },
   {
      question: "Does Shevon do paid promotions?",
      answer: "Yes! Shevon works with brands that align with his audience. Contact for more details."
   }
]

const Faq = () => {
   return (
      <section className="py-16 max-w-5xl mx-auto grid gap-8 md:grid-cols-5">
         <div className="md:col-span-2 flex flex-col justify-between">
            <div>
               <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold font-mono_sans tracking-tight">
                  FAQs
               </h2>
               <p className="text-muted-foreground mt-2 max-w-lg leading-1 font-poppins">
                  Find answers to the most common questions
                  about Shevon’s content, gear, and business inquiries.
               </p>
            </div>
            <div className="max-md:hidden w-[70%] aspect-square mx-auto relative">
               <Image src={Question} alt="question mark illustration" className="w-full h-full object-cover" fill/>
            </div>
         </div>
         <Accordion type="single" collapsible className="md:col-span-3">
            {faqs.map((faq, i) => (
               <AccordionItem value={`item-${i}`} key={faq.question}>
                  <AccordionTrigger className="text-lg md:text-xl font-mono_sans opacity-75">{faq.question}</AccordionTrigger>
                  <AccordionContent className="md:text-lg text-muted-foreground">
                     {faq.answer}
                  </AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>

      </section>
   )
}

export default Faq
