import Image from "next/image"
import London from "~/london.jpg"
import ShevonPortrait from "~/shevon.jpg"
import Space from "~/space.jpg"


const About = () => {
   return (
      <section className="pt-12 pb-12 md:pt-32 md:pb-16 max-w-5xl mx-auto">
         <div className="grid md:grid-cols-2 gap-10">
            <div className="col-span-1 rounded-lg grid grid-cols-2 gap-4">
               <div className="relative col-span-2 h-64 bg-zinc-100 border rounded-md overflow-hidden">
                  <Image src={ShevonPortrait} alt="Image of shevon salmon" fill className="object-cover"/>
               </div>
               <div className="relative col-span-1 h-48 bg-zinc-100 border rounded-md overflow-hidden">
                  <Image src={Space} alt="Image of shevon salmon" fill className="object-cover"/>
               </div>
               <div className="relative col-span-1 h-48 bg-zinc-100 border rounded-md overflow-hidden">
                  <Image src={London} alt="Image of shevon salmon" fill className="object-cover"/>  
               </div>
            </div>
            <div className="py-4 flex flex-col justify-center">
               <h2 className="text-2xl font-mono_sans font-semibold tracking-tighter sm:text-3xl xl:text-4xl">About Me</h2>
               <div className="mt-6 space-y-6 text-muted-foreground">
                  <p>
                     Hey there! I'm Shevon Salmon, a passionate YouTuber dedicated to sharing knowledge, inspiration, and
                     entertainment with my amazing audience.
                  </p>
                  <p>
                     My channel is all about [brief description of channel content]. Whether you're looking for [topic 1],
                     [topic 2], or [topic 3], I've got you covered with engaging and informative content.
                  </p>
                  <p>
                     Join me on this exciting journey as we explore [main themes of the channel] together. Don't forget to
                     subscribe and hit that notification bell to stay updated with my latest videos!
                  </p>
               </ div>
            </div>
         </div>
      </section>
   )
}

export default About
