import { HoverImageLinks } from "@/components/gears";
import { TextAnimate } from "@/components/text/animated";
import React from "react";

export default function GearsPage() {
   return (
      <main className="w-[min(1200px,90%)] mx-auto">
         <div className="relative py-12 md:pb-16 md:pt-10 lg:py-20 flex flex-col items-center gap-3">
            <TextAnimate animation="blurInUp" as="h1" className="font-sora text-center font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">Gears</TextAnimate>
            <TextAnimate as="p" className="sm:text-lg font-dm_sans text-muted-foreground max-w-sm text-center text-balance">Everything I use to capture, create, and share high-quality visuals.</TextAnimate>
         </div>
         
         <div className="max-w-4xl mx-auto mb-16">
            <HoverImageLinks />
         </div>  
      </main>
   )
}