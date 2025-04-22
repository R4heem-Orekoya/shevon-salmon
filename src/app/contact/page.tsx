import ContactForm from "@/components/contact-form"
import Image from "next/image"
import Collab from "~/shaking-hands.svg"

const Page = () => {
   return (
      <main className="w-[min(1200px,90%)] mx-auto">
         <div className="py-12 md:pb-16 md:pt-10 lg:py-20 grid items-center grid-cols-2 gap-8 max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-mono_sans font-semibold">
               Let's <br /> Collab
            </h1>
            <div className="relative col-span-1 aspect-[4/3]">
               <Image className="w-full h-full object-cover" src={Collab} alt="handshake illustration" />
            </div>
         </div>

         <ContactForm />
      </main>
   )
}

export default Page
