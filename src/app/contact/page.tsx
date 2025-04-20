import S7on from "@/components/sections/s7on"
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

         <div className="max-w-5xl aspect-video bg-zinc-100 rounded-lg mx-auto">
            <form>
               {/* <Label htmlFor={id}>Input with start icon</Label>
               <div className="relative">
                  <Input id={id} className="peer ps-9" placeholder="Email" type="email" />
                  <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                     <AtSignIcon size={16} aria-hidden="true" />
                  </div>
               </div> */}

            </form>
         </div>
      </main>
   )
}

export default Page
