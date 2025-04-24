"use client"

import { ScreenFitText } from "@/components/text/screen-fit"
import { TextScramble } from "../text/scramled"
import { useRef } from "react"
import { useInView } from "motion/react"
import { cn } from "@/lib/utils"

export default function S7on({ className }:{ className?: string }) {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: false })
   
   return (
      <div ref={ref} className={cn("max-w-5xl mx-auto relative py-10", className)}>
         <ScreenFitText className="text-background">
            <TextScramble trigger={isInView}>
               shevon
            </TextScramble>
         </ScreenFitText>
      </div>
   )
}
