"use client"

import { buttonVariants } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { CheckIcon, CopyIcon, Facebook, Mail, Twitter } from "lucide-react"
import { Input } from "./ui/input"
import { JSX, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import Link from "next/link"

interface ShareButtonProps {
   id: number | string
   triggerComponent: JSX.Element
}

export default function ShareButton({ id, triggerComponent }: ShareButtonProps) {
   const [copied, setCopied] = useState(false)
   const inputRef = useRef<HTMLInputElement>(null)
   
   const shareUrl = encodeURIComponent(`${process.env.NEXT_PUBLIC_DOMAIN}/wallpapers?id=${id}`);

   const handleCopy = () => {
      if (inputRef.current) {
         navigator.clipboard.writeText(inputRef.current.value)
         setCopied(true)
         setTimeout(() => setCopied(false), 1500)
      }
   }

   return (
      <Dialog>
         <DialogTrigger asChild>
            {triggerComponent}
         </DialogTrigger>
         <DialogContent showCloseButton onClick={(e) => {
            e.stopPropagation()
         }}>
            <DialogHeader className="sm:text-center">
               <DialogTitle>Share Wallpaper Link</DialogTitle>
               <DialogDescription>
                  Easily copy and share the wallpaper link with others.
               </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center gap-6 py-4">
               <div className="flex items-center gap-4">
                  <Link target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} className={buttonVariants({ size: "icon", variant: "outline" })}>
                     <Facebook className="w-5 h-5" />
                  </Link>
                  <Link target="_blank" href={`https://twitter.com/intent/post?text=${shareUrl}`} className={buttonVariants({ size: "icon", variant: "outline" })}>
                     <Twitter className="w-5 h-5" />
                  </Link>
                  <Link target="_blank" href={`mailto:?subject=Check this out!&body=${shareUrl}`} className={buttonVariants({ size: "icon", variant: "outline" })}>
                     <Mail className="w-5 h-5" />
                  </Link>
               </div>
               <div className="relative gap-2 flex items-center">
                  <Input
                     ref={inputRef}
                     type="text"
                     defaultValue={`${process.env.NEXT_PUBLIC_DOMAIN}/wallpapers?id=${id}`}
                     aria-label="Share link"
                     className="w-[300px] text-sm font-light"
                     readOnly
                  />
                  <TooltipProvider delayDuration={0}>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <button
                              onClick={handleCopy}
                              className="text-white hover:text-muted-foreground bg-primary focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
                              aria-label={copied ? "Copied" : "Copy to clipboard"}
                              disabled={copied}
                           >
                              <div
                                 className={cn(
                                    "transition-all",
                                    copied
                                       ? "scale-100 opacity-100"
                                       : "scale-0 opacity-0"
                                 )}
                              >
                                 <CheckIcon
                                    className="stroke-emerald-500"
                                    size={16}
                                    aria-hidden="true"
                                 />
                              </div>
                              <div
                                 className={cn(
                                    "absolute transition-all",
                                    copied
                                       ? "scale-0 opacity-0"
                                       : "scale-100 opacity-100"
                                 )}
                              >
                                 <CopyIcon size={16} aria-hidden="true" />
                              </div>
                           </button>
                        </TooltipTrigger>
                        <TooltipContent className="px-2 py-1 text-xs">
                           Copy to clipboard
                        </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   )
}