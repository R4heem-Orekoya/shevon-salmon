"use client"

import { useEffect } from "react"
import { splitText } from "motion-plus"
import { animate, stagger } from "motion"

interface AnimatedTextProps {
   text: string
}

export default function AnimatedText({ text }: AnimatedTextProps) {
   useEffect(() => {
      const { words } = splitText(
      document.querySelector(".inner-span")!
      )

      animate(
         words,
         { opacity: [0, 1], y: [20, 0] },
         {
            type: "spring",
            duration: 1.5,
            bounce: 0,
            delay: stagger(0.5),
         },
      )
   }, [])

   return (
      <>
         <span className="inner-span">
            {text}
         </span>
         <Stylesheet />
      </>
   )
}

function Stylesheet() {
   return (
      <style>{`
           .split-word {
               will-change: transform, opacity;
           }
       `}</style>
   )
}