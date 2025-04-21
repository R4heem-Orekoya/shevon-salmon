import PhoneInputWithCountrySelect from "@/components/phone-input-with-country-select"
import { AtSignIcon } from "@/components/ui/at-sign"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BriefcaseBusiness, Building, Phone, User } from "lucide-react"
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

         <div className="max-w-5xl bg-zinc-50 p-4 sm:p-8 rounded-lg mx-auto">
            <form className="max-w-2xl grid gap-6">
               <div className="grid gap-2">
                  <Label htmlFor="name">Full Name<span className="text-red-500 ml-1">*</span></Label>
                  <div className="relative">
                     <Input id="name" className="peer ps-9" placeholder="e.g. John Doe" type="text" />
                     <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                        <User size={16} aria-hidden="true" />
                     </div>
                  </div>
               </div>
               <div className="grid gap-2">
                  <Label htmlFor="email">Email Address<span className="text-red-500 ml-1">*</span></Label>
                  <div className="relative">
                     <Input id="email" className="peer ps-9" placeholder="e.g. example@mail.com" type="email" />
                     <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                        <AtSignIcon size={16} aria-hidden="true" />
                     </div>
                  </div>
               </div>
               <div className="grid gap-2">
                  <PhoneInputWithCountrySelect />
               </div>
               <div className="grid gap-2">
                  <Label htmlFor="company">Company Name</Label>
                  <div className="relative">
                     <Input id="company" className="peer ps-9" placeholder="e.g. Redoxx Labs" type="text" />
                     <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                        <Building size={16} aria-hidden="true" />
                     </div>
                  </div>
               </div>
               <div className="grid gap-2">
                  <Label htmlFor="project">Project Details<span className="text-red-500 ml-1">*</span></Label>
                  <div className="relative">
                     <Textarea id="project" className="peer ps-9 max-h-[200px] min-h-28" placeholder="Enter busiess description..." />
                     <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-start justify-center ps-3 pt-3 peer-disabled:opacity-50">
                        <BriefcaseBusiness size={16} aria-hidden="true" />
                     </div>
                  </div>
               </div>

            </form>
         </div>
      </main>
   )
}

export default Page
