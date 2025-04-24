"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface SlideUpProps {
   duration?: number
   delay?: number
   y?: number
   once?: boolean
   className?: string
   children: ReactNode
}

export default function SlideUp({ className, children, duration, delay, y, once = true }: SlideUpProps) {
   return (
      <motion.div 
         className={className}
         initial={{
            opacity: 0,
            y: y ?? 20
         }}
         whileInView={{
            opacity: 1,
            y: 0
         }}
         transition={{
            duration: duration ?? 0.5,
            delay: delay ?? 0.125
         }}
         viewport={{
            once
         }}
      >
         {children}
      </motion.div>
   )
}