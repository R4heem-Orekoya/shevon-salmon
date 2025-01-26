import Image from "next/image"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import AsusImage from "../../../public/asus-aesthetic.jpg"
import WatchImage from "../../../public/watch.jpg"
import SpaceImage from "../../../public/space.jpg"

const content = [
   {
      title: "Collaborative Editing",
      description:
         "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Collaborative Editing
         </div>
      ),
   },
   {
      title: "Real time changes",
      description:
         "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
         <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
               src="/linear.webp"
               width={300}
               height={300}
               className="h-full w-full object-cover"
               alt="linear board demo"
            />
         </div>
      ),
   },
   {
      title: "Version control",
      description:
         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
            Version control
         </div>
      ),
   },
   {
      title: "Running out of content",
      description:
         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Running out of content
         </div>
      ),
   },
]

const imagesData = [
   {
      src: WatchImage,
      alt: "Watch lifestyle image",
      id: "image-1"
   },
   {
      src: AsusImage,
      alt: "Asus aesthetic setup",
      id: "image-2"
   },
   {
      src: SpaceImage,
      alt: "Workspace setup",
      id: "image-3"
   }
]

const About = () => {
   return (
      <section className="pt-16">
         <div className="grid grid-cols-1 gap-4 mb-10 sm:hidden">
            {imagesData.map((item) => (
               <div key={item.id} className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <Image src={item.src} alt={item.alt} fill className="object-cover"/>
               </div>
            ))}
         </div>
         <StickyScroll content={content} />
      </section>
   )
}

export default About
