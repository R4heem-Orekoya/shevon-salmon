"use client"

import PhoneInputWithCountrySelect from "@/components/phone-input-with-country-select"
import { AtSignIcon } from "@/components/ui/at-sign"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BriefcaseBusiness, Building, User } from "lucide-react"
import { useForm, FormProvider  } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { MessageFormSchema, TMessageFormSchema } from "@/lib/schemas"

export default function ContactForm() {
   const methods = useForm({
      resolver: zodResolver(MessageFormSchema)
   })
   
   const { register, handleSubmit, formState: { errors } } = methods
   
   function onSubmit(data: TMessageFormSchema) { 
      console.log(data);
   }
   
   return (
      <div className="max-w-5xl bg-zinc-50 p-4 sm:p-8 rounded-lg mx-auto">
         <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl grid gap-6">
               <div className="grid gap-2">
                  <Label htmlFor="name">Full Name<span className="text-red-500 ml-1">*</span></Label>
                  <div className="relative">
                     <Input {...register("fullName")} id="name" className="peer ps-9" placeholder="e.g. John Doe" type="text" />
                     <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                        <User size={16} aria-hidden="true" />
                     </div>
                  </div>
                  <p className="text-xs text-red-500">{errors.fullName?.message}</p>
               </div>
               <div className="grid gap-2">
                  <Label htmlFor="email">Email Address<span className="text-red-500 ml-1">*</span></Label>
                  <div className="relative">
                     <Input {...register("email")} id="email" className="peer ps-9" placeholder="e.g. example@mail.com" type="email" />
                     <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                        <AtSignIcon size={16} aria-hidden="true" />
                     </div>
                  </div>
                  <p className="text-xs text-red-500">{errors.email?.message}</p>
               </div>
               <div className="grid gap-2">
                  <PhoneInputWithCountrySelect />
                  <p className="text-xs text-red-500">{errors.phoneNumber?.message}</p>
               </div>
               <div className="grid gap-2">
                  <Label htmlFor="company">Company Name</Label>
                  <div className="relative">
                     <Input {...register("companyName")} id="company" className="peer ps-9" placeholder="e.g. Redoxx Labs" type="text" />
                     <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                        <Building size={16} aria-hidden="true" />
                     </div>
                  </div>
                  <p className="text-xs text-red-500">{errors.companyName?.message}</p>
               </div>
               <div className="grid gap-2">
                  <Label htmlFor="project">Project Details<span className="text-red-500 ml-1">*</span></Label>
                  <div className="relative">
                     <Textarea {...register("message")} id="project" className="peer ps-9 max-h-[200px] min-h-28" placeholder="Enter busiess description..." />
                     <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-start justify-center ps-3 pt-3 peer-disabled:opacity-50">
                        <BriefcaseBusiness size={16} aria-hidden="true" />
                     </div>
                  </div>
                  <p className="text-xs text-red-500">{errors.message?.message}</p>
               </div>

               <Button size="lg" type="submit" className="w-fit">Send Message</Button>
            </form>
         </FormProvider>
      </div>
   )
}
