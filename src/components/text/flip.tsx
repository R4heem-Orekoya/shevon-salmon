"use client"

import { cn } from "@/lib/utils";
import { motion } from "motion/react"

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipText = ({ children, className }: { children: string, className?: string }) => {
   return (
      <motion.span
         initial="initial"
         whileHover="hovered"
         className={cn("relative block overflow-hidden", className)}
         style={{
            lineHeight: 0.75,
         }}
      >
         <div>
            {children.split("").map((l, i) => (
               <motion.span
                  variants={{
                     initial: {
                        y: 0,
                     },
                     hovered: {
                        y: "-100%",
                     },
                  }}
                  transition={{
                     duration: DURATION,
                     ease: "easeInOut",
                     delay: STAGGER * i,
                  }}
                  className="inline-block"
                  key={i}
               >
                  {l}
               </motion.span>
            ))}
         </div>
         <div className="absolute inset-0">
            {children.split("").map((l, i) => (
               <motion.span
                  variants={{
                     initial: {
                        y: "100%",
                     },
                     hovered: {
                        y: 0,
                     },
                  }}
                  transition={{
                     duration: DURATION,
                     ease: "easeInOut",
                     delay: STAGGER * i,
                  }}
                  className="inline-block"
                  key={i}
               >
                  {l}
               </motion.span>
            ))}
         </div>
      </motion.span>
   )
}

export default FlipText